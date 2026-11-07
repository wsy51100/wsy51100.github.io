(() => {
  "use strict";

  const root = document.querySelector("#photography-app");
  if (!root) return;

  // Liquid supplies the site-aware asset directory, including any baseurl.
  const assetRoot = new URL(root.dataset.assetRoot || "/assets/photography/", location.origin);
  const assetUrl = (path) => path ? new URL(path, assetRoot).href : "";
  const sourceData = window.PHOTOGRAPHY_DATA || { albums: [], totalPhotos: 0 };
  // Keep the supplied data reusable: normalize URLs on copies, never in place.
  const data = {
    ...sourceData,
    albums: (Array.isArray(sourceData.albums) ? sourceData.albums : []).map((album) => ({
      ...album,
      cover: assetUrl(album.cover),
      photos: (Array.isArray(album.photos) ? album.photos : []).map((photo) => ({
        ...photo,
        thumb: assetUrl(photo.thumb),
        src: assetUrl(photo.src),
      })),
    })),
  };
  const albums = data.albums;
  const siteName = (root.dataset.siteName || "Photography").replace(/\s+/g, " ").trim();
  const albumById = new Map(albums.map((album) => [album.id, album]));
  const directoryView = root.querySelector("#pa-directory-view");
  const albumView = root.querySelector("#pa-album-view");
  const covers = root.querySelector("#pa-album-covers");
  const albumIndex = root.querySelector("#pa-album-index");
  const grid = root.querySelector("#pa-album-grid");
  const searchTrigger = root.querySelector("#pa-search-trigger");
  const searchDialog = root.querySelector("#pa-search-dialog");
  const searchInput = root.querySelector("#pa-search-input");
  const searchResults = root.querySelector("#pa-search-results");
  const searchCount = root.querySelector("#pa-search-count");
  const lightbox = root.querySelector("#pa-lightbox-dialog");
  const lightboxImage = root.querySelector("#pa-lightbox-image");
  const lightboxCanvas = root.querySelector("#pa-lightbox-canvas");
  const lightboxPrevious = root.querySelector("#pa-lightbox-prev");
  const lightboxNext = root.querySelector("#pa-lightbox-next");
  const zoomToggle = root.querySelector("#pa-lightbox-zoom");
  const coverLinks = new Map();
  let photoButtons = new Map();
  let activeAlbum = null;
  let activePhotoIndex = 0;
  let lastGridWidth = 0;
  let directoryScrollY = 0;
  let directoryReturnAlbum = null;
  let pendingPhotoId = null;
  let layoutFrame = null;
  let lightboxReturnFocus = null;
  let restoreLightboxFocus = true;
  let searchReturnFocus = null;
  let restoreSearchFocus = true;
  let swipeStart = null;

  const photoCount = (album) => album.photos.length;
  const routeFor = (album) => `#album/${encodeURIComponent(album.id)}`;
  const countLabel = (count) => `${count} ${count === 1 ? "photograph" : "photographs"}`;
  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  function currentRoute() {
    const hash = location.hash;
    if (!hash || hash === "#collections") return null;
    const match = hash.match(/^#album\/([^/]+)$/);
    if (!match) return null;
    try { return albumById.get(decodeURIComponent(match[1])) || null; }
    catch { return null; }
  }

  function buildDirectory() {
    const directoryCount = root.querySelector("#pa-directory-count");
    if (directoryCount) directoryCount.textContent = `${albums.length} series / ${data.totalPhotos || albums.reduce((sum, album) => sum + photoCount(album), 0)} photographs`;
    if (!covers || !albumIndex) return;
    covers.replaceChildren();
    albumIndex.replaceChildren();
    const columns = [create("div", "cover-column"), create("div", "cover-column")];
    covers.append(...columns);
    albums.forEach((album, index) => {
      const link = create("a", `album-card${album.coverHeight > album.coverWidth ? " portrait" : ""}`);
      link.href = routeFor(album);
      link.dataset.albumId = album.id;
      link.style.setProperty("--album-order", index);
      link.setAttribute("aria-label", `Open ${album.title}, ${countLabel(photoCount(album))}`);
      const media = create("div", "cover-media");
      const image = create("img");
      image.src = album.cover;
      image.alt = `${album.title} cover photograph`;
      image.width = album.coverWidth;
      image.height = album.coverHeight;
      image.loading = index < 2 ? "eager" : "lazy";
      image.decoding = "async";
      media.append(image);
      const caption = create("div", "cover-caption");
      const title = create("h2", "", album.title);
      const count = create("span", "cover-count", countLabel(photoCount(album)));
      const arrow = create("span", "cover-arrow", "↗");
      arrow.setAttribute("aria-hidden", "true");
      caption.append(title, count, arrow);
      link.append(media, caption);
      columns[index % 2].append(link);
      coverLinks.set(album.id, link);
      const indexLink = create("a", "album-index-link");
      indexLink.href = routeFor(album);
      indexLink.dataset.albumId = album.id;
      indexLink.append(create("span", "", album.title), create("span", "index-count", String(photoCount(album)).padStart(2, "0")));
      albumIndex.append(indexLink);
    });
  }

  function partitionRows(photos, width, targetHeight, gap) {
    const rows = [];
    let cursor = 0;
    while (cursor < photos.length) {
      const row = [];
      let ratioSum = 0;
      while (cursor < photos.length) {
        const photo = photos[cursor];
        const ratio = Math.max(0.05, Number(photo.width) / Number(photo.height) || 1);
        const candidateSum = ratioSum + ratio;
        const candidateHeight = Math.max(1, width - gap * row.length) / candidateSum;
        if (row.length && candidateHeight < targetHeight) {
          const existingHeight = Math.max(1, width - gap * (row.length - 1)) / ratioSum;
          if (Math.abs(existingHeight - targetHeight) <= Math.abs(candidateHeight - targetHeight)) break;
          row.push(photo);
          ratioSum = candidateSum;
          cursor += 1;
          break;
        }
        row.push(photo);
        ratioSum = candidateSum;
        cursor += 1;
        if (candidateHeight <= targetHeight) break;
      }
      const fittedHeight = Math.max(1, width - gap * (row.length - 1)) / ratioSum;
      const last = cursor === photos.length;
      rows.push({ photos: row, height: last ? Math.min(targetHeight, fittedHeight) : fittedHeight });
    }
    return rows;
  }

  function layoutPhotographs(force = false) {
    if (!grid || !activeAlbum || albumView?.hidden) return;
    const width = grid.getBoundingClientRect().width;
    if (width < 40 || (!force && Math.abs(width - lastGridWidth) < 1)) return;
    lastGridWidth = width;
    const targetHeight = width < 600 ? 180 : 240;
    const gap = 8;
    const previousFocusedPhoto = grid.contains(document.activeElement) ? document.activeElement.closest("[data-photo-id]")?.dataset.photoId : null;
    const rows = partitionRows(activeAlbum.photos, width, targetHeight, gap);
    const fragment = document.createDocumentFragment();
    const previousButtons = grid.dataset.albumId === activeAlbum.id ? photoButtons : new Map();
    const nextButtons = new Map();
    rows.forEach((row) => {
      const rowElement = create("div", "photo-row");
      rowElement.style.gap = `${gap}px`;
      rowElement.style.height = `${row.height}px`;
      row.photos.forEach((photo) => {
        const index = activeAlbum.photos.indexOf(photo);
        let button = previousButtons.get(photo.id);
        if (!button) {
          button = create("button", "photo-tile");
          button.type = "button";
          button.dataset.photoId = photo.id;
          const image = create("img");
          image.src = photo.thumb;
          image.alt = `Photograph ${photo.id} from ${activeAlbum.title}`;
          image.width = photo.width;
          image.height = photo.height;
          image.loading = index < 6 ? "eager" : "lazy";
          image.decoding = "async";
          const filename = create("span", "photo-filename", photo.id.toUpperCase());
          filename.setAttribute("aria-hidden", "true");
          button.append(image, filename);
          button.addEventListener("click", () => openLightbox(index, button));
        }
        button.style.width = `${row.height * photo.width / photo.height}px`;
        button.style.height = `${row.height}px`;
        button.setAttribute("aria-label", `Enlarge ${photo.filename}, photograph ${index + 1} of ${photoCount(activeAlbum)}`);
        nextButtons.set(photo.id, button);
        rowElement.append(button);
      });
      fragment.append(rowElement);
    });
    photoButtons = nextButtons;
    grid.dataset.albumId = activeAlbum.id;
    grid.replaceChildren(fragment);
    if (previousFocusedPhoto && !lightbox?.open && !searchDialog?.open) photoButtons.get(previousFocusedPhoto)?.focus({ preventScroll: true });
  }

  function scheduleLayout() {
    if (layoutFrame) cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(() => { layoutFrame = null; layoutPhotographs(); });
  }

  function updateAdjacentAlbum(id, album, label) {
    const link = root.querySelector(`#pa-${id}`);
    if (!link) return;
    link.hidden = !album;
    if (!album) { link.removeAttribute("href"); return; }
    link.href = routeFor(album);
    link.textContent = `${label} ${album.title} ${label === "Previous" ? "←" : "→"}`;
  }

  function renderRoute({ userInitiated = false } = {}) {
    const nextAlbum = currentRoute();
    const oldAlbum = activeAlbum;
    if (!oldAlbum && nextAlbum) {
      directoryScrollY = window.scrollY;
      directoryReturnAlbum = nextAlbum.id;
    }
    if (lightbox?.open) closeLightbox(false);
    activeAlbum = nextAlbum;
    if (directoryView) directoryView.hidden = !!nextAlbum;
    if (albumView) albumView.hidden = !nextAlbum;
    document.title = nextAlbum ? `${nextAlbum.title} · Photography · ${siteName}` : `Photography · ${siteName}`;
    if (nextAlbum) {
      const title = root.querySelector("#pa-album-title");
      const eyebrow = root.querySelector("#pa-album-eyebrow");
      const count = root.querySelector("#pa-album-count");
      if (title) title.textContent = nextAlbum.title;
      if (eyebrow) eyebrow.textContent = `COLLECTION ${nextAlbum.id.toUpperCase()}`;
      if (count) count.textContent = countLabel(photoCount(nextAlbum));
      const index = albums.indexOf(nextAlbum);
      updateAdjacentAlbum("previous-album", albums[index - 1], "Previous");
      updateAdjacentAlbum("next-album", albums[index + 1], "Next");
      layoutPhotographs(true);
    }
    if (!userInitiated && !pendingPhotoId) return;
    requestAnimationFrame(() => {
      if (nextAlbum) {
        layoutPhotographs(true);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const heading = root.querySelector("#pa-album-title");
        heading?.setAttribute("tabindex", "-1");
        heading?.focus({ preventScroll: true });
        if (pendingPhotoId) {
          const photoId = pendingPhotoId;
          pendingPhotoId = null;
          const photoIndex = nextAlbum.photos.findIndex((photo) => photo.id === photoId);
          if (photoIndex >= 0) openLightbox(photoIndex, photoButtons.get(photoId));
        }
      } else {
        pendingPhotoId = null;
        const destination = directoryReturnAlbum ? coverLinks.get(directoryReturnAlbum) : directoryView?.querySelector("h1");
        destination?.setAttribute("tabindex", destination.tagName === "H1" ? "-1" : "0");
        destination?.focus({ preventScroll: true });
        window.scrollTo({ top: oldAlbum ? directoryScrollY : 0, left: 0, behavior: "instant" });
      }
    });
  }

  function navigate(album, photoId = null) {
    pendingPhotoId = photoId;
    const hash = album ? routeFor(album) : "#collections";
    if (location.hash === hash) renderRoute({ userInitiated: true });
    else location.hash = hash;
  }

  root.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest("a[href^='#']");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (href !== "#collections" && !href.startsWith("#album/")) return;
    event.preventDefault();
    let album = null;
    if (href.startsWith("#album/")) {
      try { album = albumById.get(decodeURIComponent(href.slice(7))) || null; } catch { /* Unrecognized hashes return to collections. */ }
    }
    navigate(album);
  });
  window.addEventListener("hashchange", () => renderRoute({ userInitiated: true }));

  function setZoom(zoomed) {
    lightboxCanvas?.classList.toggle("is-zoomed", zoomed);
    if (zoomToggle) {
      zoomToggle.setAttribute("aria-pressed", String(zoomed));
      zoomToggle.setAttribute("aria-label", zoomed ? "Fit photograph to screen" : "View photograph at 100 percent");
      zoomToggle.setAttribute("title", zoomed ? "Fit to screen" : "View at 100%");
      zoomToggle.textContent = zoomed ? "Fit" : "1:1";
    }
    if (lightboxCanvas) {
      lightboxCanvas.scrollLeft = 0;
      lightboxCanvas.scrollTop = 0;
    }
    if (zoomed) requestAnimationFrame(centerZoomedImage);
  }

  function centerZoomedImage() {
    if (!lightboxCanvas?.classList.contains("is-zoomed")) return;
    lightboxCanvas.scrollLeft = Math.max(0, (lightboxCanvas.scrollWidth - lightboxCanvas.clientWidth) / 2);
    lightboxCanvas.scrollTop = Math.max(0, (lightboxCanvas.scrollHeight - lightboxCanvas.clientHeight) / 2);
  }

  function showPhotograph(index) {
    if (!activeAlbum?.photos.length || !lightboxImage) return;
    activePhotoIndex = (index + photoCount(activeAlbum)) % photoCount(activeAlbum);
    const photo = activeAlbum.photos[activePhotoIndex];
    setZoom(false);
    lightboxCanvas?.setAttribute("aria-busy", "true");
    lightboxImage.src = photo.src;
    lightboxImage.alt = `Photograph ${photo.id} from ${activeAlbum.title}`;
    lightboxImage.width = photo.width;
    lightboxImage.height = photo.height;
    const counter = root.querySelector("#pa-lightbox-counter");
    const filename = root.querySelector("#pa-lightbox-filename");
    if (counter) counter.textContent = `${String(activePhotoIndex + 1).padStart(2, "0")} / ${String(photoCount(activeAlbum)).padStart(2, "0")}`;
    if (filename) filename.textContent = `${photo.filename} · ${activeAlbum.title}`;
    if (lightboxPrevious) lightboxPrevious.disabled = photoCount(activeAlbum) < 2;
    if (lightboxNext) lightboxNext.disabled = photoCount(activeAlbum) < 2;
    // Warm only the immediate next image while a visitor is deliberately browsing.
    if (photoCount(activeAlbum) > 1) {
      const next = new Image();
      next.src = activeAlbum.photos[(activePhotoIndex + 1) % photoCount(activeAlbum)].src;
    }
  }

  function openLightbox(index, trigger = null) {
    if (!lightbox || !activeAlbum?.photos.length) return;
    lightboxReturnFocus = trigger || document.activeElement;
    restoreLightboxFocus = true;
    showPhotograph(index);
    if (!lightbox.open) lightbox.showModal();
  }

  function closeLightbox(restoreFocus = true) {
    if (!lightbox?.open) return;
    restoreLightboxFocus = restoreFocus;
    lightbox.close();
  }

  lightboxImage?.addEventListener("load", () => {
    lightboxCanvas?.setAttribute("aria-busy", "false");
    centerZoomedImage();
  });
  lightboxImage?.addEventListener("error", () => lightboxCanvas?.setAttribute("aria-busy", "false"));
  lightboxImage?.addEventListener("click", () => {
    if (lightboxCanvas?.classList.contains("is-zoomed")) setZoom(false);
  });
  root.querySelector("#pa-lightbox-close")?.addEventListener("click", () => closeLightbox());
  lightboxPrevious?.addEventListener("click", () => showPhotograph(activePhotoIndex - 1));
  lightboxNext?.addEventListener("click", () => showPhotograph(activePhotoIndex + 1));
  zoomToggle?.addEventListener("click", () => setZoom(!lightboxCanvas?.classList.contains("is-zoomed")));
  lightbox?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhotograph(activePhotoIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  lightbox?.addEventListener("click", (event) => {
    if ((event.target === lightbox || event.target === lightboxCanvas) && !lightboxCanvas?.classList.contains("is-zoomed")) closeLightbox();
  });
  lightbox?.addEventListener("close", () => {
    const photo = activeAlbum?.photos[activePhotoIndex];
    const destination = lightboxReturnFocus?.isConnected ? lightboxReturnFocus : photoButtons.get(photo?.id);
    if (restoreLightboxFocus && destination?.isConnected && !searchDialog?.open) destination.focus({ preventScroll: true });
    restoreLightboxFocus = true;
    lightboxReturnFocus = null;
    lightboxImage?.removeAttribute("src");
    lightboxCanvas?.setAttribute("aria-busy", "false");
    setZoom(false);
  });
  lightboxCanvas?.addEventListener("pointerdown", (event) => {
    swipeStart = event.pointerType === "touch" && !lightboxCanvas.classList.contains("is-zoomed")
      ? { x: event.clientX, y: event.clientY } : null;
  });
  lightboxCanvas?.addEventListener("pointerup", (event) => {
    if (!swipeStart || lightboxCanvas.classList.contains("is-zoomed")) return;
    const dx = event.clientX - swipeStart.x;
    const dy = event.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) showPhotograph(activePhotoIndex + (dx < 0 ? 1 : -1));
  });
  lightboxCanvas?.addEventListener("pointercancel", () => { swipeStart = null; });

  const normalize = (value) => String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const searchableAlbums = albums.map((album) => ({ album, photo: null, title: album.title, text: normalize(`${album.title} ${album.id} collection album series 影集 相册`) }));
  const searchablePhotos = albums.flatMap((album) => album.photos.map((photo) => ({ album, photo, title: photo.filename, text: normalize(`${album.title} ${album.id} ${photo.id} ${photo.filename} photograph photo 摄影 照片`) })));

  function renderSearch() {
    if (!searchInput || !searchResults) return;
    const query = normalize(searchInput.value);
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = (query ? [...searchableAlbums, ...searchablePhotos] : searchableAlbums)
      .filter((entry) => terms.every((term) => entry.text.includes(term)));
    if (query) matches.sort((a, b) => Number(normalize(b.title) === query) - Number(normalize(a.title) === query));
    searchResults.replaceChildren();
    if (searchCount) searchCount.textContent = query ? `${matches.length} ${matches.length === 1 ? "result" : "results"}` : `Explore ${albums.length} collections`;
    if (!matches.length) {
      const empty = create("div", "search-empty");
      empty.append(create("strong", "", "No results found"), create("p", "", "Try a series name or a filename, such as b01."));
      searchResults.append(empty);
      return;
    }
    matches.forEach((entry) => {
      const anchor = create("a", "search-result");
      anchor.href = routeFor(entry.album);
      anchor.append(create("span", "search-result-type", entry.photo ? "Photograph" : "Collection"), create("strong", "", entry.title));
      anchor.append(create("p", "", entry.photo ? `${entry.album.title} · Click to view larger` : countLabel(photoCount(entry.album))));
      anchor.addEventListener("click", (event) => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        closeSearch(false);
        navigate(entry.album, entry.photo?.id || null);
      });
      searchResults.append(anchor);
    });
  }

  function openSearch() {
    if (!searchDialog || !searchInput || searchDialog.open) return;
    searchReturnFocus = document.activeElement;
    if (lightbox?.open) closeLightbox(false);
    restoreSearchFocus = true;
    searchInput.value = "";
    renderSearch();
    searchDialog.showModal();
    searchInput.focus();
  }
  function closeSearch(restoreFocus = true) {
    if (!searchDialog?.open) return;
    restoreSearchFocus = restoreFocus;
    searchDialog.close();
  }
  searchTrigger?.addEventListener("click", openSearch);
  searchInput?.addEventListener("input", renderSearch);
  searchDialog?.querySelectorAll("[data-pa-close-search]").forEach((button) => button.addEventListener("click", () => closeSearch()));
  searchDialog?.addEventListener("close", () => {
    if (restoreSearchFocus && searchReturnFocus?.isConnected && !lightbox?.open) searchReturnFocus.focus({ preventScroll: true });
    restoreSearchFocus = true;
    searchReturnFocus = null;
  });
  searchDialog?.addEventListener("click", (event) => {
    if (event.target !== searchDialog) return;
    const bounds = searchDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeSearch();
  });
  searchDialog?.addEventListener("keydown", (event) => {
    const results = Array.from(searchResults?.querySelectorAll("a.search-result") || []);
    if (event.target === searchInput && event.key === "Enter") { event.preventDefault(); results[0]?.click(); return; }
    if (!["ArrowDown", "ArrowUp"].includes(event.key) || !results.length) return;
    const current = results.indexOf(document.activeElement);
    if (current < 0 && event.target !== searchInput) return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const index = current < 0 ? (direction > 0 ? 0 : results.length - 1) : (current + direction + results.length) % results.length;
    results[index].focus();
  });

  buildDirectory();
  renderRoute();
  if (grid && typeof ResizeObserver === "function") new ResizeObserver(scheduleLayout).observe(grid);
  else window.addEventListener("resize", scheduleLayout);
})();
