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

</div>
