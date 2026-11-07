---
layout: page
title: Photography
permalink: /photography/
description: "Places, light, and everyday moments."
nav: true
nav_order: 3

photos:
  - image: assets/img/photo-01.jpg
    title: "Your first photograph"
    alt: "Describe what is visible in your first photograph."
    caption: "Location · Year"
    description: >-
      Write one or two sentences about the moment, the light,
      or what made you stop and take this photograph.

  - image: assets/img/photo-02.jpg
    title: "Your second photograph"
    alt: "Describe what is visible in your second photograph."
    caption: "Location · Year"
    description: >-
      Add a short story or a personal observation about this photograph.
---

<style>
  .photography-portfolio {
    margin: 2.5rem 0 4.5rem;
    color: var(--global-text-color);
  }

  .photography-portfolio .photo-help {
    margin: 0 0 2.75rem;
    color: var(--global-text-color-light);
    font-size: 0.8rem;
    letter-spacing: 0.02em;
  }

  .photography-gallery {
    display: grid;
    gap: clamp(3rem, 7vw, 6.5rem);
  }

  .photography-gallery .photo-entry {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
  }

  .photography-gallery .photo-media,
  .photography-gallery .photo-copy {
    min-width: 0;
  }

  .photography-gallery .photo-media figure {
    margin: 0;
  }

  .photography-gallery .photo-media picture {
    display: block;
  }

  .photography-gallery .photography-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 3px;
    cursor: zoom-in;
  }

  .photography-gallery .photo-copy {
    padding: 1rem 0;
    overflow-wrap: anywhere;
  }

  .photography-gallery .photo-index {
    margin: 0 0 1rem;
    color: var(--global-theme-color);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.16em;
  }

  .photography-gallery .photo-title {
    margin: 0 0 1.25rem;
    color: var(--global-text-color);
    font-size: clamp(1.65rem, 3vw, 2.45rem);
    font-weight: 400;
    letter-spacing: -0.035em;
    line-height: 1.2;
  }

  .photography-gallery .photo-description {
    margin: 0;
    color: var(--global-text-color);
    font-size: 0.95rem;
    line-height: 1.85;
  }

  .photography-gallery .photo-caption {
    margin: 1.5rem 0 0;
    color: var(--global-text-color-light);
    font-size: 0.75rem;
    letter-spacing: 0.04em;
  }

  .photography-gallery .photo-copy::after {
    display: block;
    width: 3.5rem;
    height: 1px;
    margin-top: 1.75rem;
    background: var(--global-theme-color);
    content: "";
    opacity: 0.45;
  }

  .photography-gallery .photo-entry:nth-child(even) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.8fr);
  }

  .photography-gallery .photo-entry:nth-child(even) .photo-media {
    grid-column: 2;
    grid-row: 1;
  }

  .photography-gallery .photo-entry:nth-child(even) .photo-copy {
    grid-column: 1;
    grid-row: 1;
    text-align: right;
  }

  .photography-gallery .photo-entry:nth-child(even) .photo-copy::after {
    margin-left: auto;
  }

  @media (max-width: 767px) {
    .photography-portfolio {
      margin-top: 1.75rem;
    }

    .photography-portfolio .photo-help {
      margin-bottom: 1.75rem;
    }

    .photography-gallery .photo-entry,
    .photography-gallery .photo-entry:nth-child(even) {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.25rem;
    }

    .photography-gallery .photo-entry .photo-media,
    .photography-gallery .photo-entry:nth-child(even) .photo-media {
      grid-column: 1;
      grid-row: 1;
    }

    .photography-gallery .photo-entry .photo-copy,
    .photography-gallery .photo-entry:nth-child(even) .photo-copy {
      grid-column: 1;
      grid-row: 2;
      padding: 0;
      text-align: left;
    }

    .photography-gallery .photo-entry .photo-copy::after,
    .photography-gallery .photo-entry:nth-child(even) .photo-copy::after {
      margin-left: 0;
    }
  }
</style>

<div class="photography-portfolio">
  <p class="photo-help">Click a photograph to view it larger.</p>
  <div class="photography-gallery">
    {% for photo in page.photos %}
      {% assign photo_alt = photo.alt | default: photo.title | escape %}
      <article class="photo-entry" aria-labelledby="photograph-title-{{ forloop.index }}">
        <div class="photo-media">
          {% include figure.liquid
             path=photo.image
             alt=photo_alt
             class="photography-image"
             sizes="(min-width: 768px) 560px, 92vw"
             loading="lazy"
             zoomable=true
          %}
        </div>
        <div class="photo-copy">
          <p class="photo-index">FRAME {% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</p>
          <h2 class="photo-title" id="photograph-title-{{ forloop.index }}">{{ photo.title | escape }}</h2>
          {% if photo.description != blank %}
            <p class="photo-description">{{ photo.description | escape | newline_to_br }}</p>
          {% endif %}
          {% if photo.caption != blank %}
            <p class="photo-caption">{{ photo.caption | escape }}</p>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</div>
