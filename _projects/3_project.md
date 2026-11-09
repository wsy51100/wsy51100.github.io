---
layout: page
title: "From Robot LiDAR Scans to Pose Tracking"
description: ""
img: assets/img/lidar-sdf-selected/overview-meshes.png
importance: 3
category: work
related_publications: false
giscus_comments: false
_styles: |
  body:has(#sdf-selected) .post-header { margin-bottom: 25px; }
  body:has(#sdf-selected) .post-title { font-size: clamp(30px, 3.5vw, 42px); line-height: 1.22; letter-spacing: -.025em; }
  body:has(#sdf-selected) .post-description:empty { display: none; }
  #sdf-selected { font-size: 15px; line-height: 1.75; color: var(--global-text-color); padding-bottom: 30px; }
  #sdf-selected, #sdf-selected * { box-sizing: border-box; }
  #sdf-selected p, #sdf-selected h2, #sdf-selected h3, #sdf-selected figure { margin: 0; }
  #sdf-selected h2 { font-size: 25px; font-weight: 500; line-height: 1.35; letter-spacing: -.015em; margin-bottom: 23px; }
  #sdf-selected h3 { font-size: 17px; font-weight: 500; line-height: 1.4; margin-bottom: 12px; }
  #sdf-selected ul { margin: 0; padding-left: 19px; }
  #sdf-selected li { margin-bottom: 8px; padding-left: 2px; }
  #sdf-selected .sdf-section { padding: 28px 0; border-top: 1px solid var(--global-divider-color); }
  #sdf-selected .sdf-eyebrow { color: var(--global-text-color-light); font-size: 11px; font-weight: 500; letter-spacing: .09em; margin-bottom: 12px; }
  #sdf-selected .sdf-grid { display: grid; grid-template-columns: .95fr 1.2fr; gap: 30px; align-items: start; }
  #sdf-selected .sdf-grid > *, #sdf-selected .sdf-ground-truth > * { min-width: 0; }
  #sdf-selected .sdf-stack > * + * { margin-top: 24px; }
  #sdf-selected .sdf-copy-block + .sdf-copy-block { margin-top: 27px; }
  #sdf-selected .sdf-keywords { font-size: 12px; line-height: 1.7; padding: 14px 16px; border: 1px solid var(--global-divider-color); color: var(--global-text-color-light); }
  #sdf-selected .sdf-keywords span { display: block; margin-bottom: 4px; }
  #sdf-selected .sdf-image { display: block; background: white; border: 1px solid var(--global-divider-color); border-radius: 6px; overflow: hidden; }
  #sdf-selected img { display: block; width: 100%; height: auto; }
  #sdf-selected figcaption { font-size: 11px; line-height: 1.65; color: var(--global-text-color-light); margin-top: 9px; }
  #sdf-selected .sdf-ground-truth { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-items: center; background: #fff; }
  #sdf-selected .sdf-ground-truth .sdf-image { border: 0; border-radius: 0; }
  #sdf-selected .sdf-system { padding: 17px; border: 1px solid var(--global-divider-color); border-radius: 6px; }
  #sdf-selected .sdf-system-grid { display: grid; grid-template-columns: 110px minmax(0, 1fr); gap: 17px; align-items: start; }
  #sdf-selected .sdf-system p { font-size: 13px; line-height: 1.75; }
  #sdf-selected .sdf-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  #sdf-selected .sdf-metric { padding: 13px 10px; border: 1px solid var(--global-divider-color); border-radius: 5px; }
  #sdf-selected .sdf-value { font-size: 22px; font-weight: 500; line-height: 1.3; white-space: nowrap; letter-spacing: -.02em; }
  #sdf-selected .sdf-metric-label { font-size: 10px; line-height: 1.6; color: var(--global-text-color-light); margin-top: 8px; }
  #sdf-selected .sdf-results .sdf-metrics { margin: 28px 0; }
  #sdf-selected .sdf-evidence { padding: 22px 25px; margin-top: 24px; border: 1px solid var(--global-divider-color); border-radius: 6px; }
  #sdf-selected .sdf-report { padding-top: 30px; }
  @media (max-width: 900px) {
    #sdf-selected .sdf-grid { grid-template-columns: minmax(0, 1fr); gap: 25px; }
    #sdf-selected .sdf-system-grid { grid-template-columns: 140px minmax(0, 1fr); }
  }
  @media (max-width: 480px) {
    #sdf-selected h2 { font-size: 22px; }
    #sdf-selected .sdf-system-grid { grid-template-columns: minmax(0, 1fr); }
    #sdf-selected .sdf-system figure { max-width: 200px; margin: 0 auto; }
    #sdf-selected .sdf-system p { font-size: 14px; }
    #sdf-selected .sdf-value { font-size: 22px; }
    #sdf-selected .sdf-metric { padding: 12px 8px; }
    #sdf-selected .sdf-metric-label { font-size: 10px; }
    #sdf-selected .sdf-evidence { padding: 18px; }
  }
---

<div id="sdf-selected">

<section class="sdf-section" aria-label="Project Workflow">
  <p class="sdf-eyebrow">Project Workflow</p>
  <div class="sdf-grid">
    <div class="sdf-stack">
      <div class="sdf-copy-block">
        <h3>Objective</h3>
        <p>Implement a scan-to-map LiDAR pose tracking and mapping pipeline based on a continuous signed distance field.</p>
      </div>
      <div class="sdf-copy-block">
        <h3>My Work</h3>
        <ul>
          <li>Built an implicit neural mapping workflow with a shallow MLP decoder.</li>
          <li>Aligned incoming point clouds to the SDF map using field values and gradients.</li>
          <li>Supported prebuilt-map localization and online incremental mapping.</li>
          <li>Extracted surface meshes via marching cubes for visualization and evaluation.</li>
        </ul>
      </div>
      <p class="sdf-keywords"><span>Keywords:</span>LiDAR | Scan-to-map registration | SDF | MLP | 3D reconstruction</p>
    </div>
    <div class="sdf-stack">
      <figure>
        <a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/overview-meshes.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/overview-meshes.png' | relative_url }}" alt="Two views of the implicit neural SDF map with estimated trajectory" width="670" height="274" loading="eager"></a>
        <figcaption>Implicit neural SDF map rendered as surface mesh with estimated trajectory</figcaption>
      </figure>
      <figure>
        <div class="sdf-ground-truth">
          <a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/ground-truth-route.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/ground-truth-route.png' | relative_url }}" alt="Recorded route with start and end point" width="343" height="215" loading="lazy"></a>
          <a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/ground-truth-cloud.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/ground-truth-cloud.png' | relative_url }}" alt="Processed self-recorded point cloud data" width="324" height="216" loading="lazy"></a>
        </div>
        <figcaption>Ground truth data after processing based on self-recorded point cloud data</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="sdf-section" aria-labelledby="sdf-pipeline-title">
  <p class="sdf-eyebrow">Course Project</p>
  <h2 id="sdf-pipeline-title">Robot Pose Estimation using Implicit Neural SDF Maps</h2>
  <div class="sdf-grid">
    <div class="sdf-stack">
      <div>
        <h3>Pipeline</h3>
        <ul>
          <li>Raw RosBag2 LiDAR scans are segmented by timestamps.</li>
          <li>Ground-truth poses are generated from KISS-SLAM initialization and Bundle Adjustment refinement.</li>
          <li>Each scan is registered against an implicit neural SDF map using field residuals and gradients.</li>
          <li>The same formulation supports localization on a prebuilt map and online incremental mapping.</li>
        </ul>
      </div>
      <div class="sdf-system">
        <div class="sdf-system-grid">
          <figure><a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/system-pipeline.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/system-pipeline.png' | relative_url }}" alt="System pipeline with mapping and pose estimation branches" width="217" height="242" loading="lazy"></a></figure>
          <p><strong>System pipeline.</strong> Each scan is preprocessed and registered to an implicit map to estimate T<sub>i</sub>, which is then used to initialize the next frame via a constant-velocity prior. In the online mode, the refined pose and scan are further used to incrementally update the implicit map (left branch). In the localization mode (red arrow), scan-to-map registration is performed against a fixed prebuilt implicit map, and the mapping/update branch is skipped.</p>
        </div>
      </div>
    </div>
    <div class="sdf-stack">
      <figure><a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/dataset.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/dataset.png' | relative_url }}" alt="Our Dataset diagram showing record data and data processing" width="543" height="273" loading="lazy"></a></figure>
      <figure><a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/experimental-setup.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/experimental-setup.png' | relative_url }}" alt="Experimental Setup diagram showing the two sequences and evaluation metrics" width="543" height="255" loading="lazy"></a></figure>
    </div>
  </div>
</section>

<section class="sdf-section sdf-results" aria-labelledby="sdf-results-title">
  <p class="sdf-eyebrow">Pose Tracking Evaluation</p>
  <h2 id="sdf-results-title">Prebuilt-map Localization and Odometry Results</h2>
  <div class="sdf-grid">
    <div>
      <h3>Evaluation Design</h3>
      <ul>
        <li>Round 1 was used to construct the reference implicit map.</li>
        <li>Round 2 was tracked against the prebuilt map from a provided initial pose.</li>
        <li>Pose quality was assessed using Absolute Trajectory Error and Relative Pose Error.</li>
        <li>Odometry was compared with a KISS-ICP baseline on Sequence 01.</li>
      </ul>
      <div class="sdf-metrics" aria-label="Localization results">
        <div class="sdf-metric"><p class="sdf-value">27.92 Hz</p><p class="sdf-metric-label">Localization mode runtime</p></div>
        <div class="sdf-metric"><p class="sdf-value">0.39 m</p><p class="sdf-metric-label">APE RMSE on Sequence 02</p></div>
        <div class="sdf-metric"><p class="sdf-value">0.07 m</p><p class="sdf-metric-label">RPE RMSE on Sequence 02</p></div>
      </div>
      <h3>Interpretation</h3>
      <p>After initialization, tracking remains locally stable. Most residual errors are short disturbances rather than persistent drift.</p>
    </div>
    <div class="sdf-stack">
      <figure><a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/localization-results.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/localization-results.png' | relative_url }}" alt="Sequence 02 APE and RPE figures with localization results table: APE max 3.71, min 0.01, RMSE 0.39 m; RPE max 0.85, min 0.01, RMSE 0.07 m" width="600" height="271" loading="lazy"></a></figure>
      <figure><a class="sdf-image" href="{{ '/assets/img/lidar-sdf-selected/odometry-seq01.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/lidar-sdf-selected/odometry-seq01.png' | relative_url }}" alt="Sequence 01 odometry trajectory and surface mesh with APE colors" width="602" height="255" loading="lazy"></a></figure>
    </div>
  </div>
</section>

<section class="sdf-section sdf-report" aria-label="Supporting report evidence">
  <p>The full course report documents a complete LiDAR-based robot pose estimation and neural implicit mapping workflow, including self-recorded robot data collection, implicit SDF map construction, scan-to-map registration, pose tracking evaluation, and mapping quality assessment.</p>
  <div class="sdf-evidence">
    <h3>Key evidence shown</h3>
    <ul>
      <li>Self-recorded Clearpath Husky A200 + Hesai XT32 LiDAR dataset with two trajectory rounds.</li>
      <li>Implicit neural SDF mapping pipeline using LiDAR ray sampling, shallow MLP decoding and marching cubes mesh extraction.</li>
      <li>Scan-to-map pose tracking with constant-velocity initialization, voxel downsampling.</li>
      <li>Evaluation using APE/RPE for localization and odometry, plus Accuracy, Completeness, F-score and Chamfer-L1 for mapping quality.</li>
    </ul>
  </div>
</section>

</div>
