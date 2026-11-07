---
layout: photography
title: Photography
permalink: /photography/
description: "Places, light, and everyday moments."
nav: true
nav_order: 3
---

<svg aria-hidden="true" class="symbol-library" xmlns="http://www.w3.org/2000/svg">
<symbol id="pa-icon-search" viewbox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 5 5"></path></symbol>
<symbol id="pa-icon-arrow" viewbox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"></path></symbol>
<symbol id="pa-icon-diagonal" viewbox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12"></path></symbol>
<symbol id="pa-icon-sun" viewbox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"></path></symbol>
<symbol id="pa-icon-moon" viewbox="0 0 24 24"><path d="M20.5 14.4A8.7 8.7 0 0 1 9.6 3.5 8.8 8.8 0 1 0 20.5 14.4Z"></path></symbol>
<symbol id="pa-icon-close" viewbox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"></path></symbol>
<symbol id="pa-icon-previous" viewbox="0 0 24 24"><path d="m15 5-7 7 7 7"></path></symbol>
<symbol id="pa-icon-next" viewbox="0 0 24 24"><path d="m9 5 7 7-7 7"></path></symbol>
</svg>

<div class="gallery-toolbar"><button id="pa-search-trigger" class="gallery-search-button" type="button" aria-label="Search photographs and albums"><svg class="icon" aria-hidden="true"><use href="#pa-icon-search"></use></svg><span>Find a frame</span></button></div>

<div class="photo-main" id="pa-main-content" tabindex="-1">
<section aria-labelledby="pa-directory-heading" id="pa-directory-view">
<div class="directory-layout">
<aside class="collection-sidebar">
<p class="eyebrow">PHOTOGRAPHIC COLLECTIONS</p>
<p class="directory-count" id="pa-directory-count">11 series / 97 photographs</p>
<nav aria-label="Browse all albums" class="album-index" id="pa-album-index"></nav>
<div class="sidebar-note"><span></span><p>Choose a collection<br/>to look a little closer.</p></div>
</aside>
<div aria-label="Photography collections" class="album-covers" id="pa-album-covers"></div>
</div>
</section>
<section aria-labelledby="pa-album-title" hidden="" id="pa-album-view">
<a class="back-link" href="#collections" id="pa-back-to-collections"><svg aria-hidden="true" class="icon"><use href="#pa-icon-arrow"></use></svg> All collections</a>
<header class="album-heading">
<p class="eyebrow" id="pa-album-eyebrow">PHOTOGRAPHIC SERIES</p>
<div class="album-title-row"><h1 id="pa-album-title" tabindex="-1">Series B</h1><span class="album-count" id="pa-album-count"></span></div>
<p class="album-hint">A collection in frames. Click a photograph to view it larger.</p>
</header>
<div aria-label="Photographs in this album" class="justified-gallery" id="pa-album-grid"></div>
<nav aria-label="Previous and next album" class="album-navigation"><a class="previous-album" id="pa-previous-album"></a><a class="next-album" id="pa-next-album"></a></nav>
</section>
</div>

<dialog aria-label="Photograph viewer" class="lightbox-dialog" id="pa-lightbox-dialog">
<div class="lightbox-toolbar"><span class="lightbox-counter" id="pa-lightbox-counter"></span><div class="lightbox-tools"><button aria-label="View photograph at actual size" aria-pressed="false" class="lightbox-text-button" id="pa-lightbox-zoom" type="button">1:1</button><button aria-label="Close photograph" class="icon-button" id="pa-lightbox-close" type="button"><svg aria-hidden="true" class="icon"><use href="#pa-icon-close"></use></svg></button></div></div>
<div class="lightbox-canvas" id="pa-lightbox-canvas"><img alt="" id="pa-lightbox-image"/></div>
<button aria-label="Previous photograph" class="lightbox-arrow lightbox-prev" id="pa-lightbox-prev" type="button"><svg aria-hidden="true" class="icon"><use href="#pa-icon-previous"></use></svg></button>
<button aria-label="Next photograph" class="lightbox-arrow lightbox-next" id="pa-lightbox-next" type="button"><svg aria-hidden="true" class="icon"><use href="#pa-icon-next"></use></svg></button>
<div class="lightbox-footer"><span id="pa-lightbox-filename"></span><span>← → to browse <span class="lightbox-help-divider">/</span> esc to close</span></div>
</dialog>

<dialog aria-labelledby="pa-search-heading" class="search-dialog" id="pa-search-dialog">
<div class="search-dialog-top"><h2 id="pa-search-heading">Find a frame.</h2><button aria-label="Close search" class="icon-button" data-pa-close-search="" type="button"><svg aria-hidden="true" class="icon"><use href="#pa-icon-close"></use></svg></button></div>
<div class="search-field"><svg aria-hidden="true" class="icon"><use href="#pa-icon-search"></use></svg><label class="sr-only" for="pa-search-input">Search albums or photograph filenames</label><input autocomplete="off" id="pa-search-input" placeholder="Try Series B, b01, or k12…" type="search"/></div>
<p aria-live="polite" class="search-count" id="pa-search-count" role="status"></p><div class="search-results" id="pa-search-results"></div>
<div class="search-help"><span>Albums &amp; filenames</span><span><kbd>esc</kbd> to close</span></div>
</dialog>

<noscript><p>Enable JavaScript to browse these photography collections.</p></noscript>

