---
layout: page
title: "Mobile Mapping System Evaluation"
description: "Comparing kinematic laser scanning with a georeferenced TLS reference."
img: assets/img/mms-evaluation/kinematic-cloud.png
importance: 2
category: work
related_publications: false
giscus_comments: false
_styles: |
  body:has(#mms-project) .post-header { margin-bottom: 26px; }
  body:has(#mms-project) .post-title { font-size: clamp(30px, 3.5vw, 44px); line-height: 1.18; letter-spacing: -.025em; }
  body:has(#mms-project) .post-description { color: var(--global-text-color-light); font-size: 14px; line-height: 1.6; }
  #mms-project { color: var(--global-text-color); font-size: 15px; line-height: 1.8; padding-bottom: 28px; }
  #mms-project, #mms-project * { box-sizing: border-box; }
  #mms-project h2, #mms-project h3, #mms-project p, #mms-project figure, #mms-project dl, #mms-project dd { margin: 0; }
  #mms-project h2 { font-size: 25px; line-height: 1.3; font-weight: 500; letter-spacing: -.02em; }
  #mms-project h3 { font-size: 17px; line-height: 1.4; font-weight: 500; }
  #mms-project .mms-meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; padding: 20px 0; border-top: 1px solid var(--global-divider-color); }
  #mms-project .mms-meta dt, #mms-project .mms-team-label { color: var(--global-text-color-light); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; }
  #mms-project .mms-meta dd { font-size: 13px; margin-top: 7px; }
  #mms-project .mms-team { border-bottom: 1px solid var(--global-divider-color); padding-bottom: 20px; margin-bottom: 22px; }
  #mms-project .mms-team-names { margin-top: 7px; font-size: 14px; overflow-wrap: anywhere; }
  #mms-project .mms-intro { margin-bottom: 24px; }
  #mms-project .mms-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start; }
  #mms-project .mms-pair > * { min-width: 0; }
  #mms-project .mms-hero h3 { margin-bottom: 10px; font-size: 15px; }
  #mms-project .mms-image-link { display: block; background: #fff; border-radius: 8px; overflow: hidden; }
  #mms-project img { display: block; width: 100%; height: auto; }
  #mms-project .mms-hero .mms-image-link { aspect-ratio: 16 / 9; display: flex; align-items: center; }
  #mms-project .mms-hero img { height: 100%; object-fit: contain; }
  #mms-project figcaption, #mms-project .mms-source { font-size: 12px; line-height: 1.75; color: var(--global-text-color-light); margin-top: 10px; }
  #mms-project .mms-section { padding: 34px 0; border-bottom: 1px solid var(--global-divider-color); scroll-margin-top: 90px; }
  #mms-project .mms-section-head { display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: baseline; gap: 12px; margin-bottom: 21px; }
  #mms-project .mms-number { color: var(--global-text-color-light); font-size: 11px; letter-spacing: .08em; }
  #mms-project .mms-section-body { margin-left: 42px; }
  #mms-project .mms-section-body > p + p { margin-top: 14px; }
  #mms-project .mms-space-top { margin-top: 22px; }
  #mms-project .mms-copy h3 { margin-bottom: 10px; }
  #mms-project .mms-copy p { font-size: 14px; line-height: 1.85; }
  #mms-project .mms-table-wrap { width: 100%; overflow-x: auto; margin-top: 18px; }
  #mms-project table { width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.7; }
  #mms-project th, #mms-project td { padding: 11px 12px; border-bottom: 1px solid var(--global-divider-color); text-align: left; vertical-align: top; color: var(--global-text-color); }
  #mms-project th { font-weight: 500; }
  #mms-project th:first-child, #mms-project td:first-child { padding-left: 0; }
  #mms-project th:last-child, #mms-project td:last-child { padding-right: 0; }
  #mms-project .mms-numeric { min-width: 410px; }
  #mms-project .mms-numeric th:not(:first-child), #mms-project .mms-numeric td:not(:first-child) { text-align: right; font-variant-numeric: tabular-nums; }
  #mms-project .mms-chart { border-top: 1px solid var(--global-divider-color); padding: 15px 0; }
  #mms-project .mms-chart:last-child { border-bottom: 1px solid var(--global-divider-color); }
  #mms-project .mms-chart summary { cursor: pointer; color: var(--global-text-color); font-size: 14px; font-weight: 500; }
  #mms-project .mms-chart figure { margin-top: 18px; }
  #mms-project .mms-plane-table { margin-top: 14px; }
  #mms-project .mms-feature-result { margin-top: 26px; padding-top: 22px; border-top: 1px solid var(--global-divider-color); }
  #mms-project .mms-feature-result h3 { margin-bottom: 10px; }
  #mms-project .mms-feature-result p { font-size: 14px; }
  #mms-project .mms-findings { margin: 0; padding-left: 19px; }
  #mms-project .mms-findings li { margin-bottom: 11px; padding-left: 3px; }
  #mms-project .mms-resource-link { display: inline-block; margin-top: 18px; font-size: 14px; font-weight: 500; }
  #mms-project .mms-quick-links { display: flex; gap: 12px 22px; flex-wrap: wrap; margin: 20px 0 26px; font-size: 13px; }
  #mms-project .mms-chapters { margin-top: 24px; }
  #mms-project .mms-chapter { border-top: 1px solid var(--global-divider-color); padding: 17px 0; scroll-margin-top: 90px; }
  #mms-project .mms-chapter:last-child { border-bottom: 1px solid var(--global-divider-color); }
  #mms-project .mms-chapter > summary { cursor: pointer; font-size: 16px; font-weight: 500; line-height: 1.6; }
  #mms-project .mms-page-range { font-size: 12px; font-weight: 400; color: var(--global-text-color-light); white-space: nowrap; margin-right: 10px; }
  #mms-project .mms-slide { margin-top: 26px; }
  #mms-project .mms-slide .mms-image-link { border: 1px solid var(--global-divider-color); }
  #mms-project .mms-slide figcaption { display: flex; gap: 5px 18px; justify-content: space-between; flex-wrap: wrap; }
  #mms-project .mms-slide-page { font-variant-numeric: tabular-nums; }
  @media (max-width: 760px) {
    #mms-project .mms-meta { grid-template-columns: minmax(0, 1fr); gap: 15px; }
    #mms-project .mms-meta dd { margin-top: 3px; }
    #mms-project .mms-pair { grid-template-columns: minmax(0, 1fr); gap: 22px; }
    #mms-project .mms-section { padding: 28px 0; }
    #mms-project .mms-section-head { grid-template-columns: 24px minmax(0, 1fr); gap: 9px; margin-bottom: 17px; }
    #mms-project .mms-section-body { margin-left: 0; }
    #mms-project h2 { font-size: 22px; }
    #mms-project th, #mms-project td { padding: 10px 8px; }
  }
---

<div id="mms-project">

<!-- 项目信息与团队署名：不设置个人分工。 -->
<dl class="mms-meta">
  <div><dt>Context</dt><dd>Master's course project</dd></div>
  <div><dt>Institution</dt><dd>University of Bonn</dd></div>
  <div><dt>Reference</dt><dd>Georeferenced static TLS</dd></div>
</dl>
<div class="mms-team">
  <p class="mms-team-label">Team</p>
  <p class="mms-team-names">Abu Talha, Sajjad Hussain, Shuyi Wu, Moein Taherkhani</p>
</div>

<p class="mms-intro">This team project evaluates kinematic laser scanning against a georeferenced terrestrial laser scanning (TLS) reference. The study covers survey planning, static and kinematic acquisition, point-cloud processing, and geometric comparison at a building survey site in Bonn.</p>

<nav class="mms-quick-links" aria-label="Project resources">
  <a href="#mms-full-presentation">Browse the complete presentation (40 pages)</a>
  <a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}" target="_blank" rel="noopener">Open PDF</a>
</nav>

<!-- 点击图片可打开原始分辨率；两幅图均保留完整比例。 -->
<div class="mms-pair mms-hero">
  <figure>
    <h3>Static TLS reference</h3>
    <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/tls-reference.png' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/mms-evaluation/tls-reference.png' | relative_url }}" alt="Georeferenced TLS point cloud of the surveyed building" width="1410" height="611" loading="eager">
    </a>
    <figcaption>The static reference point cloud, shown in the team presentation on slides 24 and 37.</figcaption>
  </figure>
  <figure>
    <h3>Kinematic point cloud</h3>
    <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/kinematic-cloud.png' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/mms-evaluation/kinematic-cloud.png' | relative_url }}" alt="Georeferenced kinematic laser scanning point cloud" width="1597" height="838" loading="eager">
    </a>
    <figcaption>The kinematic result, shown in the team presentation on slides 21 and 37.</figcaption>
  </figure>
</div>

<section class="mms-section" id="mms-survey">
  <header class="mms-section-head"><span class="mms-number">01</span><h2>Survey &amp; Acquisition</h2></header>
  <div class="mms-section-body">
    <p>The scanning plan places TLS stations, GNSS receivers, artificial targets, and a kinematic measurement trajectory around the survey site. Static observations provide the reference for the subsequent mobile mapping comparison.</p>
    <figure class="mms-space-top">
      <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/scanning-plan.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/img/mms-evaluation/scanning-plan.png' | relative_url }}" alt="Survey layout with GNSS receivers, TLS stations, targets, and the kinematic measurement trajectory" loading="lazy">
      </a>
      <figcaption>Scanning plan and site context from slide 4. Basemap imagery and its existing attribution are retained from the supplied presentation.</figcaption>
    </figure>
    <div class="mms-pair mms-space-top">
      <div class="mms-copy">
        <h3>Static measurements</h3>
        <p>A terrestrial laser scanner, GNSS observations, and artificial targets support scan registration and georeferencing. The project checks registration and georeferencing consistency before comparing the point clouds.</p>
      </div>
      <div class="mms-copy">
        <h3>Kinematic measurements</h3>
        <p>The kinematic survey uses the Z+F Profiler 9020c. The registration workflow combines profile-scanner observations with system calibration, sensor synchronization, and trajectory transformations into global coordinates.</p>
      </div>
    </div>
    <p class="mms-source">Acquisition and georeferencing: presentation slides 4–21.</p>
  </div>
</section>

<section class="mms-section" id="mms-processing">
  <header class="mms-section-head"><span class="mms-number">02</span><h2>Processing Workflow</h2></header>
  <div class="mms-section-body">
    <p>The point-cloud workflow applies subsampling and statistical outlier filtering, followed by ground removal and connected-component filtering. ICP then aligns the kinematic cloud to the fixed TLS reference before evaluation.</p>
    <figure class="mms-space-top">
      <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/processing-workflow.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/img/mms-evaluation/processing-workflow.png' | relative_url }}" alt="Point-cloud processing workflow for TLS and kinematic data, ending with ICP registration and evaluation" width="1800" height="1020" loading="lazy">
      </a>
      <figcaption>The original processing diagram from slide 22. TLS remains fixed during ICP alignment.</figcaption>
    </figure>
    <p class="mms-source"><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=19" target="_blank" rel="noopener">View the sensor-to-world transformation model in slide 19.</a></p>
  </div>
</section>

<section class="mms-section" id="mms-methods">
  <header class="mms-section-head"><span class="mms-number">03</span><h2>Evaluation Methods</h2></header>
  <div class="mms-section-body">
    <p>The study compares the processed point clouds through five approaches. These examine point distances, surface offsets, local plane geometry, and feature correspondences.</p>
    <div class="mms-table-wrap">
      <table>
        <thead><tr><th scope="col">Method</th><th scope="col">Comparison</th></tr></thead>
        <tbody>
          <tr><th scope="row">C2C</th><td>Unsigned nearest-point distances from the kinematic cloud to the TLS reference.</td></tr>
          <tr><th scope="row">C2M</th><td>Signed distances to a mesh reconstructed from the TLS reference.</td></tr>
          <tr><th scope="row">M3C2</th><td>Signed cloud comparison along locally estimated normal directions.</td></tr>
          <tr><th scope="row">Plane fitting</th><td>Plane-fitting RMS and tilt for a selected building façade.</td></tr>
          <tr><th scope="row">Keypoints</th><td>ISS keypoint selection and correspondence validation using FPFH descriptors.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mms-source">Evaluation framework: presentation slide 27.</p>
  </div>
</section>

<section class="mms-section" id="mms-results">
  <header class="mms-section-head"><span class="mms-number">04</span><h2>Distance Comparison Results</h2></header>
  <div class="mms-section-body">
    <p>The reported statistics summarize the course-study comparisons after the processing and alignment workflow.</p>
    <div class="mms-table-wrap">
      <table class="mms-numeric">
        <thead><tr><th scope="col">Method</th><th scope="col">Mean (cm)</th><th scope="col">Median (cm)</th><th scope="col">Std (cm)</th></tr></thead>
        <tbody>
          <tr><th scope="row">C2C</th><td>7.4</td><td>6.2</td><td>8.2</td></tr>
          <tr><th scope="row">C2M</th><td>+4.3</td><td>+4.7</td><td>9.7</td></tr>
          <tr><th scope="row">M3C2</th><td>+3.2</td><td>+3.0</td><td>39.2</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mms-source">C2C is unsigned. C2M and M3C2 use the signed conventions shown in their plots. C2C/C2M evaluate 836,352 points; M3C2 uses 278,831 core points. Source: slides 29, 31, and 32.</p>

    <!-- open 表示默认展开；其他结果图可点击标题展开。 -->
    <div class="mms-space-top">
      <details class="mms-chart" open>
        <summary>C2C distance distribution</summary>
        <figure>
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/c2c-histogram.png' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/img/mms-evaluation/c2c-histogram.png' | relative_url }}" alt="Original C2C histogram with mean 7.4 cm, median 6.2 cm, and p95 19.3 cm" width="1588" height="960" loading="lazy">
          </a>
          <figcaption>85% of evaluated distances are below 10 cm; the reported 95th percentile is 19.3 cm. Original figure from slide 29.</figcaption>
        </figure>
      </details>
      <details class="mms-chart">
        <summary>C2M signed-distance distribution</summary>
        <figure>
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/c2m-histogram.png' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/img/mms-evaluation/c2m-histogram.png' | relative_url }}" alt="Original C2M signed-distance histogram with mean plus 4.3 cm" width="1588" height="960" loading="lazy">
          </a>
          <figcaption>The presentation reports 78% positive and 22% negative distances under its surface sign convention. Original figure from slide 31.</figcaption>
        </figure>
      </details>
      <details class="mms-chart">
        <summary>M3C2 normal-direction distance distribution</summary>
        <figure>
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/m3c2-histogram.png' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/img/mms-evaluation/m3c2-histogram.png' | relative_url }}" alt="Original M3C2 signed-distance histogram with mean plus 3.2 cm" width="1588" height="960" loading="lazy">
          </a>
          <figcaption>75.8% of core-point distances lie within ±10 cm and 86.3% within ±20 cm. Original figure from slide 32.</figcaption>
        </figure>
      </details>
    </div>
  </div>
</section>

<section class="mms-section" id="mms-local">
  <header class="mms-section-head"><span class="mms-number">05</span><h2>Local Geometry &amp; Keypoints</h2></header>
  <div class="mms-section-body">
    <div class="mms-pair">
      <figure>
        <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/facade-region.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/mms-evaluation/facade-region.png' | relative_url }}" alt="Building point cloud with the façade region selected for local plane fitting" width="1152" height="844" loading="lazy">
        </a>
        <figcaption>The selected façade region shown in slide 33.</figcaption>
      </figure>
      <div class="mms-copy">
        <h3>Selected façade plane</h3>
        <p>The local plane-fitting comparison reports lower RMS and tilt for the TLS reference on the selected façade.</p>
        <div class="mms-table-wrap mms-plane-table">
          <table>
            <thead><tr><th scope="col">Cloud</th><th scope="col">RMS (cm)</th><th scope="col">Tilt (°)</th></tr></thead>
            <tbody>
              <tr><th scope="row">KMS</th><td>3.68</td><td>0.275</td></tr>
              <tr><th scope="row">TLS</th><td>0.27</td><td>0.107</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mms-source">Reported façade comparison from slide 33.</p>
      </div>
    </div>
    <div class="mms-feature-result">
      <h3>Keypoint correspondences</h3>
      <p>The point-based evaluation uses ISS keypoints and FPFH descriptors. From 1,500 selected keypoints, it reports 191 mutual correspondences and 103 validated matches, or 54% of the mutual correspondences.</p>
      <p class="mms-source">Keypoint workflow and matching counts: slides 34–35.</p>
    </div>
  </div>
</section>

<section class="mms-section" id="mms-findings">
  <header class="mms-section-head"><span class="mms-number">06</span><h2>Findings &amp; Resources</h2></header>
  <div class="mms-section-body">
    <ul class="mms-findings">
      <li>The kinematic point cloud reproduces the overall building geometry in the survey area.</li>
      <li>C2M and M3C2 report positive mean signed offsets in their comparisons with the TLS reference.</li>
      <li>The selected façade shows lower plane-fitting RMS for TLS, supporting its role as the geometric reference in this study.</li>
    </ul>
    <p class="mms-source">Summary of the team presentation, slides 36–37.</p>
    <a class="mms-resource-link" href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}" target="_blank" rel="noopener">View the full course presentation (PDF)</a>
  </div>
</section>

<section class="mms-section" id="mms-full-presentation">
  <header class="mms-section-head"><span class="mms-number">07</span><h2>Complete Presentation</h2></header>
  <div class="mms-section-body">
    <p>Explore all 40 pages of the original team presentation, including the survey setup, georeferencing, registration, evaluation, conclusion, and appendix. Expand a chapter and select a page to view the full-size image, or open its corresponding PDF page.</p>
    <p class="mms-source">The project overview above is an edited summary. The pages below reproduce the supplied PDF in its original order.</p>
    <div class="mms-chapters">
      <details class="mms-chapter" id="mms-pages-01-02" open>
        <summary><span class="mms-page-range">Pages 01-02</span> Project Overview</summary>
        <figure class="mms-slide" id="mms-slide-01">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-01.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 01: Application and Evaluation of Kinematic MSS">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-01.webp' | relative_url }}" alt="Page 01 of 40: Application and Evaluation of Kinematic MSS" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">01 / 40 · Application and Evaluation of Kinematic MSS</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=1" target="_blank" rel="noopener" aria-label="Open PDF at page 1">Open PDF page 01</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-02">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-02.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 02: Outline">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-02.webp' | relative_url }}" alt="Page 02 of 40: Outline" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">02 / 40 · Outline</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=2" target="_blank" rel="noopener" aria-label="Open PDF at page 2">Open PDF page 02</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-03-04">
        <summary><span class="mms-page-range">Pages 03-04</span> Scanning Plan</summary>
        <figure class="mms-slide" id="mms-slide-03">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-03.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 03: Scanning Plan">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-03.webp' | relative_url }}" alt="Page 03 of 40: Scanning Plan" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">03 / 40 · Scanning Plan</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=3" target="_blank" rel="noopener" aria-label="Open PDF at page 3">Open PDF page 03</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-04">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-04.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 04: Scanning Plan">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-04.webp' | relative_url }}" alt="Page 04 of 40: Scanning Plan" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">04 / 40 · Scanning Plan</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=4" target="_blank" rel="noopener" aria-label="Open PDF at page 4">Open PDF page 04</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-05-15">
        <summary><span class="mms-page-range">Pages 05-15</span> Static Measurements &amp; Georeferencing</summary>
        <figure class="mms-slide" id="mms-slide-05">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-05.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 05: Static Part">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-05.webp' | relative_url }}" alt="Page 05 of 40: Static Part" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">05 / 40 · Static Part</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=5" target="_blank" rel="noopener" aria-label="Open PDF at page 5">Open PDF page 05</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-06">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-06.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 06: Instrument introduction">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-06.webp' | relative_url }}" alt="Page 06 of 40: Instrument introduction" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">06 / 40 · Instrument introduction</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=6" target="_blank" rel="noopener" aria-label="Open PDF at page 6">Open PDF page 06</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-07">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-07.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 07: Data Acquisition – Static ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-07.webp' | relative_url }}" alt="Page 07 of 40: Data Acquisition – Static " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">07 / 40 · Data Acquisition – Static </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=7" target="_blank" rel="noopener" aria-label="Open PDF at page 7">Open PDF page 07</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-08">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-08.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 08: Georeferencing – Static">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-08.webp' | relative_url }}" alt="Page 08 of 40: Georeferencing – Static" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">08 / 40 · Georeferencing – Static</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=8" target="_blank" rel="noopener" aria-label="Open PDF at page 8">Open PDF page 08</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-09">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-09.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 09: Georeferencing – Static">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-09.webp' | relative_url }}" alt="Page 09 of 40: Georeferencing – Static" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">09 / 40 · Georeferencing – Static</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=9" target="_blank" rel="noopener" aria-label="Open PDF at page 9">Open PDF page 09</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-10">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-10.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 10: GNSS Processing – GPS 1">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-10.webp' | relative_url }}" alt="Page 10 of 40: GNSS Processing – GPS 1" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">10 / 40 · GNSS Processing – GPS 1</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=10" target="_blank" rel="noopener" aria-label="Open PDF at page 10">Open PDF page 10</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-11">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-11.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 11: GNSS Processing – GPS 2">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-11.webp' | relative_url }}" alt="Page 11 of 40: GNSS Processing – GPS 2" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">11 / 40 · GNSS Processing – GPS 2</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=11" target="_blank" rel="noopener" aria-label="Open PDF at page 11">Open PDF page 11</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-12">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-12.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 12: GNSS Processing – GPS 3">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-12.webp' | relative_url }}" alt="Page 12 of 40: GNSS Processing – GPS 3" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">12 / 40 · GNSS Processing – GPS 3</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=12" target="_blank" rel="noopener" aria-label="Open PDF at page 12">Open PDF page 12</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-13">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-13.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 13: GNSS Processing - Summary">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-13.webp' | relative_url }}" alt="Page 13 of 40: GNSS Processing - Summary" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">13 / 40 · GNSS Processing - Summary</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=13" target="_blank" rel="noopener" aria-label="Open PDF at page 13">Open PDF page 13</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-14">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-14.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 14: Static PCD Registration">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-14.webp' | relative_url }}" alt="Page 14 of 40: Static PCD Registration" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">14 / 40 · Static PCD Registration</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=14" target="_blank" rel="noopener" aria-label="Open PDF at page 14">Open PDF page 14</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-15">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-15.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 15: Georeferenced PCD – Static ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-15.webp' | relative_url }}" alt="Page 15 of 40: Georeferenced PCD – Static " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">15 / 40 · Georeferenced PCD – Static </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=15" target="_blank" rel="noopener" aria-label="Open PDF at page 15">Open PDF page 15</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-16-21">
        <summary><span class="mms-page-range">Pages 16-21</span> Kinematic Measurements &amp; Registration</summary>
        <figure class="mms-slide" id="mms-slide-16">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-16.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 16: Kinematic Part">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-16.webp' | relative_url }}" alt="Page 16 of 40: Kinematic Part" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">16 / 40 · Kinematic Part</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=16" target="_blank" rel="noopener" aria-label="Open PDF at page 16">Open PDF page 16</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-17">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-17.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 17: Instrument introduction">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-17.webp' | relative_url }}" alt="Page 17 of 40: Instrument introduction" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">17 / 40 · Instrument introduction</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=17" target="_blank" rel="noopener" aria-label="Open PDF at page 17">Open PDF page 17</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-18">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-18.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 18: Data Acquisition – Kinematic ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-18.webp' | relative_url }}" alt="Page 18 of 40: Data Acquisition – Kinematic " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">18 / 40 · Data Acquisition – Kinematic </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=18" target="_blank" rel="noopener" aria-label="Open PDF at page 18">Open PDF page 18</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-19">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-19.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 19: Pointcloud Registration - Kinematic">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-19.webp' | relative_url }}" alt="Page 19 of 40: Pointcloud Registration - Kinematic" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">19 / 40 · Pointcloud Registration - Kinematic</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=19" target="_blank" rel="noopener" aria-label="Open PDF at page 19">Open PDF page 19</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-20">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-20.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 20: Pointcloud Registration - Kinematic">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-20.webp' | relative_url }}" alt="Page 20 of 40: Pointcloud Registration - Kinematic" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">20 / 40 · Pointcloud Registration - Kinematic</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=20" target="_blank" rel="noopener" aria-label="Open PDF at page 20">Open PDF page 20</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-21">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-21.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 21: Georeferenced PCD - Kinematic">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-21.webp' | relative_url }}" alt="Page 21 of 40: Georeferenced PCD - Kinematic" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">21 / 40 · Georeferenced PCD - Kinematic</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=21" target="_blank" rel="noopener" aria-label="Open PDF at page 21">Open PDF page 21</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-22-25">
        <summary><span class="mms-page-range">Pages 22-25</span> Point-cloud Processing &amp; Georeferenced Results</summary>
        <figure class="mms-slide" id="mms-slide-22">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-22.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 22: Point Cloud Processing ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-22.webp' | relative_url }}" alt="Page 22 of 40: Point Cloud Processing " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">22 / 40 · Point Cloud Processing </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=22" target="_blank" rel="noopener" aria-label="Open PDF at page 22">Open PDF page 22</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-23">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-23.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 23: Georeferenced PCD – Static ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-23.webp' | relative_url }}" alt="Page 23 of 40: Georeferenced PCD – Static " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">23 / 40 · Georeferenced PCD – Static </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=23" target="_blank" rel="noopener" aria-label="Open PDF at page 23">Open PDF page 23</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-24">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-24.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 24: Georeferenced PCD – Static ">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-24.webp' | relative_url }}" alt="Page 24 of 40: Georeferenced PCD – Static " width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">24 / 40 · Georeferenced PCD – Static </span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=24" target="_blank" rel="noopener" aria-label="Open PDF at page 24">Open PDF page 24</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-25">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-25.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 25: Georeferenced PCD - Kinematic">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-25.webp' | relative_url }}" alt="Page 25 of 40: Georeferenced PCD - Kinematic" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">25 / 40 · Georeferenced PCD - Kinematic</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=25" target="_blank" rel="noopener" aria-label="Open PDF at page 25">Open PDF page 25</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-26-35">
        <summary><span class="mms-page-range">Pages 26-35</span> Evaluation</summary>
        <figure class="mms-slide" id="mms-slide-26">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-26.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 26: Evaluation">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-26.webp' | relative_url }}" alt="Page 26 of 40: Evaluation" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">26 / 40 · Evaluation</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=26" target="_blank" rel="noopener" aria-label="Open PDF at page 26">Open PDF page 26</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-27">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-27.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 27: Evaluation Metrics">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-27.webp' | relative_url }}" alt="Page 27 of 40: Evaluation Metrics" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">27 / 40 · Evaluation Metrics</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=27" target="_blank" rel="noopener" aria-label="Open PDF at page 27">Open PDF page 27</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-28">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-28.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 28: Evaluation- C2C">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-28.webp' | relative_url }}" alt="Page 28 of 40: Evaluation- C2C" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">28 / 40 · Evaluation- C2C</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=28" target="_blank" rel="noopener" aria-label="Open PDF at page 28">Open PDF page 28</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-29">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-29.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 29: Evaluation- C2C">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-29.webp' | relative_url }}" alt="Page 29 of 40: Evaluation- C2C" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">29 / 40 · Evaluation- C2C</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=29" target="_blank" rel="noopener" aria-label="Open PDF at page 29">Open PDF page 29</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-30">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-30.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 30: Evaluation- C2M">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-30.webp' | relative_url }}" alt="Page 30 of 40: Evaluation- C2M" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">30 / 40 · Evaluation- C2M</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=30" target="_blank" rel="noopener" aria-label="Open PDF at page 30">Open PDF page 30</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-31">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-31.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 31: Evaluation- C2M">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-31.webp' | relative_url }}" alt="Page 31 of 40: Evaluation- C2M" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">31 / 40 · Evaluation- C2M</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=31" target="_blank" rel="noopener" aria-label="Open PDF at page 31">Open PDF page 31</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-32">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-32.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 32: Evaluation- M3C2">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-32.webp' | relative_url }}" alt="Page 32 of 40: Evaluation- M3C2" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">32 / 40 · Evaluation- M3C2</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=32" target="_blank" rel="noopener" aria-label="Open PDF at page 32">Open PDF page 32</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-33">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-33.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 33: Evaluation- Plane fitting">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-33.webp' | relative_url }}" alt="Page 33 of 40: Evaluation- Plane fitting" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">33 / 40 · Evaluation- Plane fitting</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=33" target="_blank" rel="noopener" aria-label="Open PDF at page 33">Open PDF page 33</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-34">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-34.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 34: Evaluation- KeyPoints">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-34.webp' | relative_url }}" alt="Page 34 of 40: Evaluation- KeyPoints" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">34 / 40 · Evaluation- KeyPoints</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=34" target="_blank" rel="noopener" aria-label="Open PDF at page 34">Open PDF page 34</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-35">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-35.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 35: Evaluation- KeyPoints">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-35.webp' | relative_url }}" alt="Page 35 of 40: Evaluation- KeyPoints" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">35 / 40 · Evaluation- KeyPoints</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=35" target="_blank" rel="noopener" aria-label="Open PDF at page 35">Open PDF page 35</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-36-38">
        <summary><span class="mms-page-range">Pages 36-38</span> Findings &amp; Conclusion</summary>
        <figure class="mms-slide" id="mms-slide-36">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-36.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 36: Summary of findings">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-36.webp' | relative_url }}" alt="Page 36 of 40: Summary of findings" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">36 / 40 · Summary of findings</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=36" target="_blank" rel="noopener" aria-label="Open PDF at page 36">Open PDF page 36</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-37">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-37.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 37: Conclusion">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-37.webp' | relative_url }}" alt="Page 37 of 40: Conclusion" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">37 / 40 · Conclusion</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=37" target="_blank" rel="noopener" aria-label="Open PDF at page 37">Open PDF page 37</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-38">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-38.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 38: Thank you for your attention!">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-38.webp' | relative_url }}" alt="Page 38 of 40: Thank you for your attention!" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">38 / 40 · Thank you for your attention!</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=38" target="_blank" rel="noopener" aria-label="Open PDF at page 38">Open PDF page 38</a></figcaption>
        </figure>
      </details>
      <details class="mms-chapter" id="mms-pages-39-40">
        <summary><span class="mms-page-range">Pages 39-40</span> Appendix: Keypoint Details</summary>
        <figure class="mms-slide" id="mms-slide-39">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-39.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 39: Evaluation- KeyPoints">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-39.webp' | relative_url }}" alt="Page 39 of 40: Evaluation- KeyPoints" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">39 / 40 · Evaluation- KeyPoints</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=39" target="_blank" rel="noopener" aria-label="Open PDF at page 39">Open PDF page 39</a></figcaption>
        </figure>
        <figure class="mms-slide" id="mms-slide-40">
          <a class="mms-image-link" href="{{ '/assets/img/mms-evaluation/slides/slide-40.webp' | relative_url }}" target="_blank" rel="noopener" aria-label="Open full-size page 40: Evaluation- KeyPoints">
            <img src="{{ '/assets/img/mms-evaluation/slides/slide-40.webp' | relative_url }}" alt="Page 40 of 40: Evaluation- KeyPoints" width="1800" height="1013" loading="lazy" decoding="async">
          </a>
          <figcaption><span class="mms-slide-page">40 / 40 · Evaluation- KeyPoints</span><a href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}#page=40" target="_blank" rel="noopener" aria-label="Open PDF at page 40">Open PDF page 40</a></figcaption>
        </figure>
      </details>
    </div>
    <a class="mms-resource-link" href="{{ '/assets/pdf/mms-evaluation/presentation.pdf' | relative_url }}" target="_blank" rel="noopener">Open the complete presentation (PDF)</a>
  </div>
</section>

</div>

