---
layout: page
title: "UAV Monitoring of Pine Wilt Disease"
description: "UAV imagery, deep learning and forest-mask postprocessing for infected-tree mapping in southern Jiangxi."
img: assets/img/pine-wilt-en/figures/cover.webp
importance: 4
category: fun
related_publications: false
giscus_comments: false
_styles: |
  body:has(#pine-wilt-english) .post-header { margin-bottom: 26px; }
  body:has(#pine-wilt-english) .post-title { font-size: clamp(30px, 3.5vw, 42px); line-height: 1.2; letter-spacing: -.025em; }
  body:has(#pine-wilt-english) .post-description { font-size: 14px; line-height: 1.65; color: var(--global-text-color-light); }
  #pine-wilt-english { font-size: 15px; line-height: 1.8; color: var(--global-text-color); padding-bottom: 30px; }
  #pine-wilt-english, #pine-wilt-english * { box-sizing: border-box; }
  #pine-wilt-english h2, #pine-wilt-english h3, #pine-wilt-english p, #pine-wilt-english figure, #pine-wilt-english dl, #pine-wilt-english dd { margin: 0; }
  #pine-wilt-english h2 { font-size: 25px; line-height: 1.3; font-weight: 500; letter-spacing: -.02em; }
  #pine-wilt-english h3 { font-size: 17px; line-height: 1.45; font-weight: 500; margin-bottom: 12px; }
  #pine-wilt-english p + p { margin-top: 14px; }
  #pine-wilt-english ul, #pine-wilt-english ol { padding-left: 21px; margin: 14px 0 0; }
  #pine-wilt-english li { margin-bottom: 8px; padding-left: 2px; }
  #pine-wilt-english .pw-meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; padding: 20px 0; border-top: 1px solid var(--global-divider-color); }
  #pine-wilt-english .pw-meta dt { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--global-text-color-light); }
  #pine-wilt-english .pw-meta dd { font-size: 13px; margin-top: 5px; }
  #pine-wilt-english .pw-team { padding-bottom: 23px; border-bottom: 1px solid var(--global-divider-color); font-size: 13px; }
  #pine-wilt-english .pw-team p + p { margin-top: 5px; }
  #pine-wilt-english .pw-intro { display: grid; grid-template-columns: 1fr 1.15fr; gap: 30px; align-items: center; padding: 28px 0; }
  #pine-wilt-english .pw-formal-title { font-size: 18px; line-height: 1.5; margin-bottom: 17px; }
  #pine-wilt-english .pw-links { display: flex; flex-wrap: wrap; gap: 12px 22px; font-size: 13px; margin-bottom: 25px; }
  #pine-wilt-english .pw-section { padding: 31px 0; border-top: 1px solid var(--global-divider-color); scroll-margin-top: 90px; }
  #pine-wilt-english .pw-heading { display: grid; grid-template-columns: 28px minmax(0, 1fr); gap: 14px; align-items: baseline; margin-bottom: 22px; }
  #pine-wilt-english .pw-number { color: var(--global-text-color-light); font-size: 11px; }
  #pine-wilt-english .pw-content { margin-left: 42px; }
  #pine-wilt-english .pw-image { display: block; border: 1px solid var(--global-divider-color); border-radius: 6px; overflow: hidden; background: #fff; }
  #pine-wilt-english img { display: block; width: 100%; height: auto; }
  #pine-wilt-english figcaption, #pine-wilt-english .pw-source { font-size: 12px; line-height: 1.7; color: var(--global-text-color-light); margin-top: 9px; }
  #pine-wilt-english .pw-content > figure { margin-top: 23px; }
  #pine-wilt-english .pw-study { display: grid; grid-template-columns: 1.3fr 1fr; gap: 30px; align-items: start; }
  #pine-wilt-english .pw-study figure { max-width: 320px; margin: 0 auto; }
  #pine-wilt-english .pw-intro > *, #pine-wilt-english .pw-study > *, #pine-wilt-english .pw-pair > * { min-width: 0; }
  #pine-wilt-english .pw-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; margin-top: 23px; align-items: start; }
  #pine-wilt-english .pw-pair .pw-image { aspect-ratio: 1.2; display: flex; align-items: center; }
  #pine-wilt-english .pw-pair img { height: 100%; object-fit: contain; }
  #pine-wilt-english .pw-formulas { max-width: 720px; margin: 23px auto 0; }
  #pine-wilt-english .pw-table-wrap { width: 100%; overflow-x: auto; margin-top: 19px; }
  #pine-wilt-english table { width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.7; }
  #pine-wilt-english th, #pine-wilt-english td { text-align: left; padding: 11px 12px; vertical-align: top; border-bottom: 1px solid var(--global-divider-color); }
  #pine-wilt-english th { font-weight: 500; }
  #pine-wilt-english th:first-child, #pine-wilt-english td:first-child { padding-left: 0; }
  #pine-wilt-english .pw-results-table { min-width: 620px; }
  #pine-wilt-english .pw-results-table td:not(:first-child), #pine-wilt-english .pw-results-table th:not(:first-child) { text-align: right; font-variant-numeric: tabular-nums; }
  #pine-wilt-english .pw-detail, #pine-wilt-english .pw-chapter { margin-top: 22px; padding: 16px 0; border-top: 1px solid var(--global-divider-color); scroll-margin-top: 90px; }
  #pine-wilt-english .pw-detail > summary, #pine-wilt-english .pw-chapter > summary { cursor: pointer; font-size: 14px; font-weight: 500; line-height: 1.6; }
  #pine-wilt-english .pw-detail figure { margin-top: 22px; }
  #pine-wilt-english .pw-page-range { color: var(--global-text-color-light); font-size: 12px; font-weight: 400; margin-right: 12px; white-space: nowrap; }
  #pine-wilt-english .pw-slide { margin-top: 27px; scroll-margin-top: 90px; }
  #pine-wilt-english .pw-slide figcaption { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px 18px; }
  #pine-wilt-english .pw-bottom { margin-top: 24px; }
  @media (max-width: 760px) {
    #pine-wilt-english .pw-meta, #pine-wilt-english .pw-intro, #pine-wilt-english .pw-study, #pine-wilt-english .pw-pair { grid-template-columns: minmax(0, 1fr); }
    #pine-wilt-english .pw-meta { gap: 13px; }
    #pine-wilt-english .pw-content { margin-left: 0; }
    #pine-wilt-english .pw-heading { grid-template-columns: 24px minmax(0, 1fr); gap: 10px; }
    #pine-wilt-english h2 { font-size: 22px; }
  }
---

<div id="pine-wilt-english">
<dl class="pw-meta">
  <div><dt>Context</dt><dd>Undergraduate team project · D626</dd></div>
  <div><dt>Institution</dt><dd>Jiangxi Normal University</dd></div>
  <div><dt>Study area</dt><dd>Ganzhou, southern Jiangxi, China</dd></div>
</dl>
<div class="pw-team">
  <p><strong>Team:</strong> Sun Zhenghe · Zheng Leran · Wu Shuyi · Zheng Yajie</p>
  <p><strong>Advisers:</strong> Xu Jian · Huang Shiming</p>
  <p>School of Geography and Environment, Jiangxi Normal University</p>
</div>
<div class="pw-intro">
  <div>
    <p class="pw-formal-title">Monitoring Pine Wilt Disease-Infected Trees Using UAV Remote Sensing and Deep Learning Algorithms</p>
    <p>This team project investigates how UAV imagery can support the identification and mapping of visibly infected and dead pine trees in the mountainous region of southern Jiangxi. It compares pixel segmentation with object detection and combines their outputs with forest-area extraction.</p>
    <p>The workflow connects aerial image mosaicking, visual sample annotation, spectral and texture features, deep learning, and geospatial postprocessing.</p>
  </div>
  <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/final-map.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Infected-tree extraction after forest-mask postprocessing in Validation Area 1."><img src="{{ '/assets/img/pine-wilt-en/figures/final-map.webp' | relative_url }}" alt="Infected-tree extraction after forest-mask postprocessing in Validation Area 1." width="1690" height="1174" loading="lazy" decoding="async"></a>
  <figcaption>Infected-tree extraction after forest-mask postprocessing in Validation Area 1.</figcaption>
</figure>
</div>
<nav class="pw-links" aria-label="Project resources">
  <a href="#pw-background">Background</a><a href="#pw-workflow">Workflow</a><a href="#pw-results">Results</a><a href="#pw-source">Browse all 40 slides</a>
  <a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}" target="_blank" rel="noopener">Complete presentation (PDF)</a>
</nav>

<section class="pw-section" id="pw-background">
  <header class="pw-heading"><span class="pw-number">01</span><h2>Background</h2></header>
  <div class="pw-content">
    <p>Pine wilt disease threatens pine forests through its rapid spread, high mortality among infected trees, and difficulty of control. The problem is particularly relevant to southern Jiangxi, where extensive and contiguous stands of Masson pine provide conditions for the disease to spread. Efficient monitoring is therefore important for identifying affected trees and supporting forest management.</p>
    <p>Conventional monitoring relies on manual ground surveys, which are time-consuming and labor-intensive. UAV remote sensing provides aerial imagery that can be combined with deep learning to support rapid, automated identification of visibly affected pine crowns. Changes in needle color and crown structure, from yellowing and reddish-brown foliage to exposed pale branches after needle loss, provide visual cues for distinguishing symptomatic and dead infected trees.</p>
    <details class="pw-chapter" id="pw-pages-01-07"><summary><span class="pw-page-range">Slides 01-07</span>Project Overview</summary>
<figure class="pw-slide" id="pw-slide-01">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-01.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 01: Project Introduction"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-01.webp' | relative_url }}" alt="Slide 01 of 40: Project Introduction" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>01 / 40 · Project Introduction</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=1" target="_blank" rel="noopener">Open PDF page 01</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-02">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-02.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 02: Contents"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-02.webp' | relative_url }}" alt="Slide 02 of 40: Contents" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>02 / 40 · Contents</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=2" target="_blank" rel="noopener">Open PDF page 02</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-03">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-03.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 03: 01 Project Overview"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-03.webp' | relative_url }}" alt="Slide 03 of 40: 01 Project Overview" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>03 / 40 · 01 Project Overview</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=3" target="_blank" rel="noopener">Open PDF page 03</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-04">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-04.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 04: 1.1 Background"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-04.webp' | relative_url }}" alt="Slide 04 of 40: 1.1 Background" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>04 / 40 · 1.1 Background</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=4" target="_blank" rel="noopener">Open PDF page 04</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-05">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-05.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 05: 1.2 Study Area"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-05.webp' | relative_url }}" alt="Slide 05 of 40: 1.2 Study Area" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>05 / 40 · 1.2 Study Area</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=5" target="_blank" rel="noopener">Open PDF page 05</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-06">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-06.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 06: 1.3 Survey of Infected Pines"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-06.webp' | relative_url }}" alt="Slide 06 of 40: 1.3 Survey of Infected Pines" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>06 / 40 · 1.3 Survey of Infected Pines</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=6" target="_blank" rel="noopener">Open PDF page 06</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-07">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-07.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 07: 1.4 Survey of Infected Pines"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-07.webp' | relative_url }}" alt="Slide 07 of 40: 1.4 Survey of Infected Pines" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>07 / 40 · 1.4 Survey of Infected Pines</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=7" target="_blank" rel="noopener">Open PDF page 07</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-study">
  <header class="pw-heading"><span class="pw-number">02</span><h2>Study Area &amp; Image Acquisition</h2></header>
  <div class="pw-content">
    <div class="pw-study">
      <div>
        <p>The study focuses on Ganzhou in southern Jiangxi, including training and validation areas in Huichang and Yudu counties. Hilly terrain and extensive Masson pine stands motivate the use of aerial imagery for forest monitoring.</p>
        <p>The acquisition setup uses a <strong>DJI Phantom 4</strong> at a flight altitude of <strong>150 m</strong>. Flight planning considers tree distribution, elevation, UAV range, and forward and side overlap. Pix4Dmapper produces orthomosaics, which are cropped and prepared in ENVI.</p>
        <p>Visual interpretation distinguishes healthy, early-infected, middle-stage, and late-stage crowns. The project targets visible symptoms and dead infected trees in RGB imagery.</p>
      </div>
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/study-map.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Study area, training areas and validation areas in southern Jiangxi."><img src="{{ '/assets/img/pine-wilt-en/figures/study-map.webp' | relative_url }}" alt="Study area, training areas and validation areas in southern Jiangxi." width="920" height="1260" loading="lazy" decoding="async"></a>
  <figcaption>Study area, training areas and validation areas in southern Jiangxi.</figcaption>
</figure>
    </div>
    <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/symptoms.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Pine appearance at the four infection stages described in the presentation."><img src="{{ '/assets/img/pine-wilt-en/figures/symptoms.webp' | relative_url }}" alt="Pine appearance at the four infection stages described in the presentation." width="2402" height="1098" loading="lazy" decoding="async"></a>
  <figcaption>Pine appearance at the four infection stages described in the presentation.</figcaption>
</figure>
    
  </div>
</section>

<section class="pw-section" id="pw-workflow">
  <header class="pw-heading"><span class="pw-number">03</span><h2>Technical Workflow</h2></header>
  <div class="pw-content">
    <p>UAV images are mosaicked, aligned to a common coordinate system, and cropped to remove blurred edges. The workflow then builds sample libraries, prepares spectral and texture features, trains and compares two deep learning routes, and intersects predictions with an extracted forest mask. Visual accuracy assessment guides ROI refinement and retraining.</p>
    <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/workflow.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Complete technical workflow, including both model routes, refinement loops and forest-mask postprocessing."><img src="{{ '/assets/img/pine-wilt-en/figures/workflow.webp' | relative_url }}" alt="Complete technical workflow, including both model routes, refinement loops and forest-mask postprocessing." width="2544" height="1256" loading="lazy" decoding="async"></a>
  <figcaption>Complete technical workflow, including both model routes, refinement loops and forest-mask postprocessing.</figcaption>
</figure>
    <details class="pw-chapter" id="pw-pages-08-09"><summary><span class="pw-page-range">Slides 08-09</span>Design Approach</summary>
<figure class="pw-slide" id="pw-slide-08">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-08.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 08: 02 Design Approach"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-08.webp' | relative_url }}" alt="Slide 08 of 40: 02 Design Approach" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>08 / 40 · 02 Design Approach</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=8" target="_blank" rel="noopener">Open PDF page 08</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-09">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-09.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 09: 2.1 Technical Workflow"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-09.webp' | relative_url }}" alt="Slide 09 of 40: 2.1 Technical Workflow" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>09 / 40 · 2.1 Technical Workflow</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=9" target="_blank" rel="noopener">Open PDF page 09</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-samples">
  <header class="pw-heading"><span class="pw-number">04</span><h2>Sample Annotation</h2></header>
  <div class="pw-content">
    <p>The presentation reports a library of <strong>1,143 infected-tree and dead infected-tree samples</strong>. ENVI ROIs delineate tree boundaries. Sampling is refined from one training area to multiple areas with dense samples and varied land cover.</p>
    <div class="pw-table-wrap">
      <table><thead><tr><th scope="col">Target</th><th scope="col">Visual interpretation</th><th scope="col">Annotation guidance</th></tr></thead><tbody>
        <tr><th scope="row">Infected trees</th><td>Yellowish brown, reddish brown or brown crowns with compact texture.</td><td>Trace the crown boundary consistently.</td></tr>
        <tr><th scope="row">Dead infected trees</th><td>Gray, open crowns with clearly visible branches.</td><td>Delineate only the central portion and keep boundaries small.</td></tr>
      </tbody></table>
    </div>
    <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/sample-examples.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Infected-tree and dead infected-tree sample examples."><img src="{{ '/assets/img/pine-wilt-en/figures/sample-examples.webp' | relative_url }}" alt="Infected-tree and dead infected-tree sample examples." width="2360" height="820" loading="lazy" decoding="async"></a>
  <figcaption>Infected-tree and dead infected-tree sample examples.</figcaption>
</figure>
    <p class="pw-source">The complete sample-area examples, working-subset counts and revised training-area selection are included in slides 14-19 below.</p>
    <details class="pw-chapter" id="pw-pages-10-19"><summary><span class="pw-page-range">Slides 10-19</span>Data Preparation &amp; Sample Annotation</summary>
<figure class="pw-slide" id="pw-slide-10">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-10.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 10: 03 Implementation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-10.webp' | relative_url }}" alt="Slide 10 of 40: 03 Implementation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>10 / 40 · 03 Implementation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=10" target="_blank" rel="noopener">Open PDF page 10</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-11">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-11.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 11: 3.1 Training and Validation Area Selection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-11.webp' | relative_url }}" alt="Slide 11 of 40: 3.1 Training and Validation Area Selection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>11 / 40 · 3.1 Training and Validation Area Selection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=11" target="_blank" rel="noopener">Open PDF page 11</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-12">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-12.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 12: 3.2 Data Overview"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-12.webp' | relative_url }}" alt="Slide 12 of 40: 3.2 Data Overview" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>12 / 40 · 3.2 Data Overview</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=12" target="_blank" rel="noopener">Open PDF page 12</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-13">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-13.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 13: 3.3 Data Preprocessing"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-13.webp' | relative_url }}" alt="Slide 13 of 40: 3.3 Data Preprocessing" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>13 / 40 · 3.3 Data Preprocessing</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=13" target="_blank" rel="noopener">Open PDF page 13</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-14">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-14.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 14: 3.4 Sample Selection Criteria"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-14.webp' | relative_url }}" alt="Slide 14 of 40: 3.4 Sample Selection Criteria" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>14 / 40 · 3.4 Sample Selection Criteria</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=14" target="_blank" rel="noopener">Open PDF page 14</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-15">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-15.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 15: 3.4 Sample Dataset Creation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-15.webp' | relative_url }}" alt="Slide 15 of 40: 3.4 Sample Dataset Creation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>15 / 40 · 3.4 Sample Dataset Creation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=15" target="_blank" rel="noopener">Open PDF page 15</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-16">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-16.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 16: 3.4 Sample Examples (Infected Trees)"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-16.webp' | relative_url }}" alt="Slide 16 of 40: 3.4 Sample Examples (Infected Trees)" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>16 / 40 · 3.4 Sample Examples (Infected Trees)</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=16" target="_blank" rel="noopener">Open PDF page 16</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-17">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-17.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 17: 3.4 Sample Overview"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-17.webp' | relative_url }}" alt="Slide 17 of 40: 3.4 Sample Overview" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>17 / 40 · 3.4 Sample Overview</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=17" target="_blank" rel="noopener">Open PDF page 17</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-18">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-18.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 18: 3.1 Training and Validation Area Selection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-18.webp' | relative_url }}" alt="Slide 18 of 40: 3.1 Training and Validation Area Selection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>18 / 40 · 3.1 Training and Validation Area Selection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=18" target="_blank" rel="noopener">Open PDF page 18</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-19">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-19.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 19: Training Area Examples (Infected Trees)"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-19.webp' | relative_url }}" alt="Slide 19 of 40: Training Area Examples (Infected Trees)" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>19 / 40 · Training Area Examples (Infected Trees)</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=19" target="_blank" rel="noopener">Open PDF page 19</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-features">
  <header class="pw-heading"><span class="pw-number">05</span><h2>Spectral &amp; Texture Features</h2></header>
  <div class="pw-content">
    <p>Three visible-light bands are combined with eight texture statistics: mean, variance, homogeneity, contrast, dissimilarity, entropy, angular second moment, and correlation. The segmentation setup uses the resulting <strong>11-band input</strong>.</p>
    <p>Principal component analysis supplies the first component for texture extraction in ENVI. Co-occurrence Measures generates the texture bands, which are stacked and normalized to a common range.</p>
    <div class="pw-formulas">
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/texture-formulas.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Original feature table and formulas, including the presentation&#x27;s English labels."><img src="{{ '/assets/img/pine-wilt-en/figures/texture-formulas.webp' | relative_url }}" alt="Original feature table and formulas, including the presentation&#x27;s English labels." width="1570" height="1190" loading="lazy" decoding="async"></a>
  <figcaption>Original feature table and formulas, including the presentation&#x27;s English labels.</figcaption>
</figure>
    </div>
    <details class="pw-chapter" id="pw-pages-20-22"><summary><span class="pw-page-range">Slides 20-22</span>Feature Preparation</summary>
<figure class="pw-slide" id="pw-slide-20">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-20.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 20: 3.5 Feature Set Preparation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-20.webp' | relative_url }}" alt="Slide 20 of 40: 3.5 Feature Set Preparation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>20 / 40 · 3.5 Feature Set Preparation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=20" target="_blank" rel="noopener">Open PDF page 20</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-21">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-21.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 21: 3.5 Feature Set Preparation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-21.webp' | relative_url }}" alt="Slide 21 of 40: 3.5 Feature Set Preparation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>21 / 40 · 3.5 Feature Set Preparation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=21" target="_blank" rel="noopener">Open PDF page 21</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-22">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-22.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 22: 3.5 Feature Set Preparation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-22.webp' | relative_url }}" alt="Slide 22 of 40: 3.5 Feature Set Preparation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>22 / 40 · 3.5 Feature Set Preparation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=22" target="_blank" rel="noopener">Open PDF page 22</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-segmentation">
  <header class="pw-heading"><span class="pw-number">06</span><h2>Pixel Segmentation</h2></header>
  <div class="pw-content">
    <p>The segmentation route uses ENVI Deep Learning's TensorFlow-based <strong>ENVINet5</strong>, an encoder-decoder architecture based on U-Net. It assigns labels to pixels and represents infected-tree regions as irregular patches.</p>
    <p>Initialization uses <strong>patch size 464, 11 bands, and one class</strong>. The described procedure creates label rasters for three training areas and builds two initial models. Randomized parameter-group training produces <strong>25 candidates, BEST00-BEST24</strong>. BEST12, BEST13, and BEST15 are shortlisted; comparison against visually interpreted samples in the validation area leads to the selection of BEST12.</p>
    <div class="pw-pair">
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/segmentation-workflow.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Pixel-segmentation workflow in ENVI."><img src="{{ '/assets/img/pine-wilt-en/figures/segmentation-workflow.webp' | relative_url }}" alt="Pixel-segmentation workflow in ENVI." width="1200" height="940" loading="lazy" decoding="async"></a>
  <figcaption>Pixel-segmentation workflow in ENVI.</figcaption>
</figure>
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/segmentation-result.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Direct infected-tree extraction before forest-mask postprocessing."><img src="{{ '/assets/img/pine-wilt-en/figures/segmentation-result.webp' | relative_url }}" alt="Direct infected-tree extraction before forest-mask postprocessing." width="1480" height="998" loading="lazy" decoding="async"></a>
  <figcaption>Direct infected-tree extraction before forest-mask postprocessing.</figcaption>
</figure>
    </div>
    <details class="pw-chapter" id="pw-pages-23-27"><summary><span class="pw-page-range">Slides 23-27</span>Deep Learning &amp; Pixel Segmentation</summary>
<figure class="pw-slide" id="pw-slide-23">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-23.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 23: 3.6 Deep Learning"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-23.webp' | relative_url }}" alt="Slide 23 of 40: 3.6 Deep Learning" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>23 / 40 · 3.6 Deep Learning</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=23" target="_blank" rel="noopener">Open PDF page 23</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-24">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-24.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 24: 3.6.1 Deep Learning with Pixel Segmentation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-24.webp' | relative_url }}" alt="Slide 24 of 40: 3.6.1 Deep Learning with Pixel Segmentation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>24 / 40 · 3.6.1 Deep Learning with Pixel Segmentation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=24" target="_blank" rel="noopener">Open PDF page 24</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-25">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-25.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 25: 3.6.1 Deep Learning with Pixel Segmentation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-25.webp' | relative_url }}" alt="Slide 25 of 40: 3.6.1 Deep Learning with Pixel Segmentation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>25 / 40 · 3.6.1 Deep Learning with Pixel Segmentation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=25" target="_blank" rel="noopener">Open PDF page 25</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-26">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-26.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 26: 3.6.1 Deep Learning with Pixel Segmentation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-26.webp' | relative_url }}" alt="Slide 26 of 40: 3.6.1 Deep Learning with Pixel Segmentation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>26 / 40 · 3.6.1 Deep Learning with Pixel Segmentation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=26" target="_blank" rel="noopener">Open PDF page 26</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-27">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-27.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 27: 3.6.1 Deep Learning with Pixel Segmentation"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-27.webp' | relative_url }}" alt="Slide 27 of 40: 3.6.1 Deep Learning with Pixel Segmentation" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>27 / 40 · 3.6.1 Deep Learning with Pixel Segmentation</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=27" target="_blank" rel="noopener">Open PDF page 27</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-detection">
  <header class="pw-heading"><span class="pw-number">07</span><h2>Object Detection</h2></header>
  <div class="pw-content">
    <p>Sample ROIs are exported as shapefiles, converted to rectangles and imported as rectangular ROIs to create object-detection label rasters. The training procedure specifies <strong>25 epochs</strong>. Classification uses a <strong>confidence threshold of 0.8</strong> and an <strong>IoU setting of 0.1</strong>.</p>
    <p>The source procedure supplies the same label rasters for training and validation. Its model-initialization, labeling, training and inference steps are retained in slides 28-31.</p>
    <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/detection-result.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Infected-tree extraction using object detection."><img src="{{ '/assets/img/pine-wilt-en/figures/detection-result.webp' | relative_url }}" alt="Infected-tree extraction using object detection." width="830" height="772" loading="lazy" decoding="async"></a>
  <figcaption>Infected-tree extraction using object detection.</figcaption>
</figure>
    <details class="pw-chapter" id="pw-pages-28-31"><summary><span class="pw-page-range">Slides 28-31</span>Object Detection</summary>
<figure class="pw-slide" id="pw-slide-28">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-28.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 28: 3.6.2 Deep Learning with Object Detection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-28.webp' | relative_url }}" alt="Slide 28 of 40: 3.6.2 Deep Learning with Object Detection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>28 / 40 · 3.6.2 Deep Learning with Object Detection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=28" target="_blank" rel="noopener">Open PDF page 28</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-29">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-29.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 29: 3.6.2 Deep Learning with Object Detection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-29.webp' | relative_url }}" alt="Slide 29 of 40: 3.6.2 Deep Learning with Object Detection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>29 / 40 · 3.6.2 Deep Learning with Object Detection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=29" target="_blank" rel="noopener">Open PDF page 29</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-30">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-30.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 30: 3.6.2 Deep Learning with Object Detection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-30.webp' | relative_url }}" alt="Slide 30 of 40: 3.6.2 Deep Learning with Object Detection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>30 / 40 · 3.6.2 Deep Learning with Object Detection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=30" target="_blank" rel="noopener">Open PDF page 30</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-31">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-31.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 31: 3.6.2 Deep Learning with Object Detection"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-31.webp' | relative_url }}" alt="Slide 31 of 40: 3.6.2 Deep Learning with Object Detection" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>31 / 40 · 3.6.2 Deep Learning with Object Detection</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=31" target="_blank" rel="noopener">Open PDF page 31</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-postprocessing">
  <header class="pw-heading"><span class="pw-number">08</span><h2>Forest-mask Postprocessing</h2></header>
  <div class="pw-content">
    <p>Bare ground and buildings are major sources of false detections. Forest-area extraction supplies a spatial mask for excluding predictions on non-forest land cover, including dry grass outside forest stands.</p>
    <p>Multiresolution segmentation groups pixels by color and shape similarity. Comparison of scales including 500, 600 and 700 leads to a final scale parameter of approximately <strong>600</strong>. The extracted forest area is intersected with model outputs, followed by cluster-based removal.</p>
    <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/forest-postprocessing.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Forest extraction and the land-cover confusions addressed by postprocessing."><img src="{{ '/assets/img/pine-wilt-en/figures/forest-postprocessing.webp' | relative_url }}" alt="Forest extraction and the land-cover confusions addressed by postprocessing." width="2300" height="1000" loading="lazy" decoding="async"></a>
  <figcaption>Forest extraction and the land-cover confusions addressed by postprocessing.</figcaption>
</figure>
    <details class="pw-chapter" id="pw-pages-32-35"><summary><span class="pw-page-range">Slides 32-35</span>Forest-mask Postprocessing</summary>
<figure class="pw-slide" id="pw-slide-32">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-32.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 32: 3.7 Postprocessing Model Outputs"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-32.webp' | relative_url }}" alt="Slide 32 of 40: 3.7 Postprocessing Model Outputs" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>32 / 40 · 3.7 Postprocessing Model Outputs</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=32" target="_blank" rel="noopener">Open PDF page 32</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-33">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-33.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 33: 3.7 Postprocessing Model Outputs"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-33.webp' | relative_url }}" alt="Slide 33 of 40: 3.7 Postprocessing Model Outputs" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>33 / 40 · 3.7 Postprocessing Model Outputs</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=33" target="_blank" rel="noopener">Open PDF page 33</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-34">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-34.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 34: 3.7 Postprocessing Model Outputs"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-34.webp' | relative_url }}" alt="Slide 34 of 40: 3.7 Postprocessing Model Outputs" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>34 / 40 · 3.7 Postprocessing Model Outputs</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=34" target="_blank" rel="noopener">Open PDF page 34</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-35">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-35.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 35: 3.7 Postprocessing Model Outputs"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-35.webp' | relative_url }}" alt="Slide 35 of 40: 3.7 Postprocessing Model Outputs" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>35 / 40 · 3.7 Postprocessing Model Outputs</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=35" target="_blank" rel="noopener">Open PDF page 35</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-results">
  <header class="pw-heading"><span class="pw-number">09</span><h2>Results &amp; Interpretation</h2></header>
  <div class="pw-content">
    <p>The reported method comparison uses visually interpreted trees as the reference. Pixel segmentation gives higher producer's accuracy and lower omission error; object detection gives higher user's accuracy but misses a larger proportion of reference trees.</p>
    <div class="pw-table-wrap"><table class="pw-results-table">
      <thead><tr><th scope="col">Method</th><th scope="col">User's accuracy</th><th scope="col">Producer's accuracy</th><th scope="col">Commission error</th><th scope="col">Omission error</th></tr></thead>
      <tbody><tr><th scope="row">Pixel segmentation</th><td>0.44</td><td>0.97</td><td>0.56</td><td>0.03</td></tr><tr><th scope="row">Object detection</th><td>0.70</td><td>0.55</td><td>0.29</td><td>0.45</td></tr></tbody>
    </table></div>
    <p class="pw-source">Values reproduced as reported in slide 37. User's accuracy is correct detections divided by all detections; producer's accuracy is correct detections divided by the visually interpreted reference count.</p>
    <details class="pw-detail"><summary>Training loss and F1 curves</summary>
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/loss-curves.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Object-detection and pixel-segmentation loss curves."><img src="{{ '/assets/img/pine-wilt-en/figures/loss-curves.webp' | relative_url }}" alt="Object-detection and pixel-segmentation loss curves." width="1970" height="1244" loading="lazy" decoding="async"></a>
  <figcaption>Object-detection and pixel-segmentation loss curves.</figcaption>
</figure>
      <figure>
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/figures/f1-curves.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size figure: Pixel-segmentation F1 curves for infected and dead infected trees."><img src="{{ '/assets/img/pine-wilt-en/figures/f1-curves.webp' | relative_url }}" alt="Pixel-segmentation F1 curves for infected and dead infected trees." width="2560" height="820" loading="lazy" decoding="async"></a>
  <figcaption>Pixel-segmentation F1 curves for infected and dead infected trees.</figcaption>
</figure>
    </details>
    <div class="pw-bottom"><h3>Project Outcome</h3><p>The project identifies pixel segmentation as the more practical route for infected-tree extraction in this workflow. Combining UAV imagery, labeled samples, texture features and forest-mask postprocessing provides a way to locate visibly affected trees and support forestry field investigation.</p></div>
    <details class="pw-chapter" id="pw-pages-36-40"><summary><span class="pw-page-range">Slides 36-40</span>Results &amp; Analysis</summary>
<figure class="pw-slide" id="pw-slide-36">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-36.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 36: 04 Results and Analysis"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-36.webp' | relative_url }}" alt="Slide 36 of 40: 04 Results and Analysis" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>36 / 40 · 04 Results and Analysis</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=36" target="_blank" rel="noopener">Open PDF page 36</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-37">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-37.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 37: 4.1 Accuracy Comparison of the Two Methods"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-37.webp' | relative_url }}" alt="Slide 37 of 40: 4.1 Accuracy Comparison of the Two Methods" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>37 / 40 · 4.1 Accuracy Comparison of the Two Methods</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=37" target="_blank" rel="noopener">Open PDF page 37</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-38">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-38.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 38: 4.1 Accuracy Comparison of the Two Methods"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-38.webp' | relative_url }}" alt="Slide 38 of 40: 4.1 Accuracy Comparison of the Two Methods" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>38 / 40 · 4.1 Accuracy Comparison of the Two Methods</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=38" target="_blank" rel="noopener">Open PDF page 38</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-39">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-39.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 39: 4.1 Accuracy Comparison of the Two Methods"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-39.webp' | relative_url }}" alt="Slide 39 of 40: 4.1 Accuracy Comparison of the Two Methods" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>39 / 40 · 4.1 Accuracy Comparison of the Two Methods</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=39" target="_blank" rel="noopener">Open PDF page 39</a></figcaption>
</figure>
<figure class="pw-slide" id="pw-slide-40">
  <a class="pw-image" href="{{ '/assets/img/pine-wilt-en/slides/slide-40.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open original slide 40: Results"><img src="{{ '/assets/img/pine-wilt-en/slides/slide-40.webp' | relative_url }}" alt="Slide 40 of 40: Results" width="1800" height="1013" loading="lazy" decoding="async"></a>
  <figcaption><span>40 / 40 · Results</span><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}#page=40" target="_blank" rel="noopener">Open PDF page 40</a></figcaption>
</figure>
</details>
  </div>
</section>

<section class="pw-section" id="pw-source">
  <header class="pw-heading"><span class="pw-number">↗</span><h2>Complete Presentation</h2></header>
  <div class="pw-content">
    <p>All 40 original slides are included in the expandable chapter groups above. These groups retain the complete figures, diagrams, tables, software settings and training curves. Select a slide to view it at full size.</p>
    <p><a href="{{ '/assets/pdf/pine-wilt-en/D626-presentation-en.pdf' | relative_url }}" target="_blank" rel="noopener">Open the complete presentation (PDF · 40 pages)</a></p>
    <nav class="pw-links" aria-label="Source presentation chapters"><a href="#pw-pages-01-07">Slides 01-07: Project Overview</a><a href="#pw-pages-08-09">Slides 08-09: Design Approach</a><a href="#pw-pages-10-19">Slides 10-19: Data Preparation &amp; Sample Annotation</a><a href="#pw-pages-20-22">Slides 20-22: Feature Preparation</a><a href="#pw-pages-23-27">Slides 23-27: Deep Learning &amp; Pixel Segmentation</a><a href="#pw-pages-28-31">Slides 28-31: Object Detection</a><a href="#pw-pages-32-35">Slides 32-35: Forest-mask Postprocessing</a><a href="#pw-pages-36-40">Slides 36-40: Results &amp; Analysis</a></nav>
  </div>
</section>
</div>
