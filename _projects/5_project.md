---
layout: page
title: "Travel Risk Assessment"
description: "Random Forest and DT-CA analysis across Beijing, Shanghai, Guangzhou, and Shenzhen."
img: assets/img/b1517/travel-safety-workflow.png
importance: 3
category: fun
related_publications: false
giscus_comments: false
_styles: |
  body:has(#b1517-project) .post-header { margin-bottom: 26px; }
  body:has(#b1517-project) .post-title { font-size: clamp(30px, 3.5vw, 44px); line-height: 1.18; letter-spacing: -.025em; }
  body:has(#b1517-project) .post-description { color: var(--global-text-color-light); font-size: 14px; line-height: 1.6; }
  #b1517-project { color: var(--global-text-color); font-size: 15px; line-height: 1.85; padding-bottom: 28px; }
  #b1517-project, #b1517-project * { box-sizing: border-box; }
  #b1517-project h2, #b1517-project h3, #b1517-project p, #b1517-project figure, #b1517-project dl, #b1517-project dd { margin: 0; }
  #b1517-project h2 { font-size: 25px; line-height: 1.3; font-weight: 500; letter-spacing: -.02em; }
  #b1517-project h3 { font-size: 17px; line-height: 1.45; font-weight: 500; }
  #b1517-project .b1517-translation { padding: 14px 18px; border-left: 2px solid var(--global-theme-color); background: var(--global-code-bg-color); font-size: 13px; line-height: 1.8; }
  #b1517-project .b1517-links { display: flex; flex-wrap: wrap; gap: 10px 24px; margin: 17px 0 26px; font-size: 14px; }
  #b1517-project .b1517-primary-link { font-weight: 500; }
  #b1517-project .b1517-meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; padding: 20px 0; border-top: 1px solid var(--global-divider-color); }
  #b1517-project .b1517-meta dt, #b1517-project .b1517-label { color: var(--global-text-color-light); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; }
  #b1517-project .b1517-meta dd { font-size: 13px; margin-top: 7px; }
  #b1517-project .b1517-team { padding-bottom: 20px; border-bottom: 1px solid var(--global-divider-color); }
  #b1517-project .b1517-team p + p { margin-top: 6px; }
  #b1517-project .b1517-team-names { font-size: 14px; }
  #b1517-project .b1517-team-context { color: var(--global-text-color-light); font-size: 12px; }
  #b1517-project .b1517-section { padding: 34px 0; border-bottom: 1px solid var(--global-divider-color); scroll-margin-top: 90px; }
  #b1517-project .b1517-section-head { display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: baseline; gap: 12px; margin-bottom: 21px; }
  #b1517-project .b1517-number { color: var(--global-text-color-light); font-size: 11px; letter-spacing: .08em; }
  #b1517-project .b1517-section-body { margin-left: 42px; }
  #b1517-project .b1517-section-body > p + p { margin-top: 14px; }
  #b1517-project .b1517-figure { margin-top: 24px; }
  #b1517-project .b1517-image-link { display: block; background: #fff; border: 1px solid var(--global-divider-color); border-radius: 8px; overflow: hidden; }
  #b1517-project img { display: block; width: 100%; height: auto; }
  #b1517-project figcaption, #b1517-project .b1517-source { color: var(--global-text-color-light); font-size: 12px; line-height: 1.8; margin-top: 10px; }
  #b1517-project .b1517-table-wrap { width: 100%; overflow-x: auto; margin-top: 22px; }
  #b1517-project table { width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.75; }
  #b1517-project th, #b1517-project td { padding: 12px; border-bottom: 1px solid var(--global-divider-color); text-align: left; vertical-align: top; color: var(--global-text-color); }
  #b1517-project th { font-weight: 500; }
  #b1517-project th:first-child, #b1517-project td:first-child { padding-left: 0; }
  #b1517-project th:last-child, #b1517-project td:last-child { padding-right: 0; }
  #b1517-project .b1517-module-table { min-width: 520px; }
  #b1517-project .b1517-module-table th:first-child { width: 24%; }
  #b1517-project .b1517-detail { margin-top: 24px; padding: 17px 0; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); }
  #b1517-project .b1517-detail > summary { cursor: pointer; font-size: 14px; font-weight: 500; }
  #b1517-project .b1517-detail ol { margin: 17px 0 0; padding-left: 21px; font-size: 14px; }
  #b1517-project li { padding-left: 3px; margin-bottom: 10px; }
  #b1517-project .b1517-detail figure { margin-top: 20px; }
  #b1517-project .b1517-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; margin-top: 24px; }
  #b1517-project .b1517-grid > * { min-width: 0; }
  #b1517-project .b1517-grid h3 { margin-bottom: 9px; }
  #b1517-project .b1517-grid p { font-size: 14px; }
  #b1517-project .b1517-features { padding-left: 19px; margin: 0; }
  #b1517-project .b1517-resources { display: flex; flex-wrap: wrap; gap: 10px 24px; margin-top: 24px; font-size: 14px; }
  @media (max-width: 760px) {
    #b1517-project .b1517-meta { grid-template-columns: minmax(0, 1fr); gap: 15px; }
    #b1517-project .b1517-meta dd { margin-top: 3px; }
    #b1517-project .b1517-section { padding: 28px 0; }
    #b1517-project .b1517-section-head { grid-template-columns: 24px minmax(0, 1fr); gap: 9px; margin-bottom: 17px; }
    #b1517-project .b1517-section-body { margin-left: 0; }
    #b1517-project h2 { font-size: 22px; }
    #b1517-project .b1517-grid { grid-template-columns: minmax(0, 1fr); gap: 20px; }
    #b1517-project th, #b1517-project td { padding: 10px 8px; }
  }
---

<div id="b1517-project">

<!-- 页面开头：翻译说明与代码链接。 -->
<p class="b1517-translation"><strong>Translation note.</strong> The original report was written in Chinese. This English version is a translation.</p>
<nav class="b1517-links" aria-label="Project links">
  <a class="b1517-primary-link" href="https://github.com/wsy51100/2022-Gold-Medal-B1517-Random-Forest-and-DT-CA-based-Travel-Risk-Assessment-Analysis" target="_blank" rel="noopener">View source code on GitHub ↗</a>
  <a href="https://mp.weixin.qq.com/s/_CX0UZ5PmPzmuD2FMFDe1g" target="_blank" rel="noopener">Original Chinese article ↗</a>
</nav>

<dl class="b1517-meta">
  <div><dt>Project</dt><dd>B1517 · 2022</dd></div>
  <div><dt>Recognition</dt><dd>First Prize</dd></div>
  <div><dt>Spatial resolution</dt><dd>1,000 m × 1,000 m grid</dd></div>
</dl>
<div class="b1517-team">
  <p class="b1517-label">Team B1517</p>
  <p class="b1517-team-context">School of Geography and Environment, Jiangxi Normal University · Advisor: Bisong Hu</p>
</div>

<section class="b1517-section" id="b1517-overview">
  <header class="b1517-section-head"><span class="b1517-number">01</span><h2>Project Overview</h2></header>
  <div class="b1517-section-body">
    <p>This project assessed COVID-19-related spatial risk and travel safety in Beijing, Shanghai, Guangzhou, and Shenzhen. It combined entropy-weighted vulnerability and hazard scores, Random Forest analysis, and decision tree cellular automata (DT-CA) within a geospatial workflow.</p>
    <p>The study addressed the need to examine variation within cities. A 1 km grid brought together epidemic observations and socioeconomic and built-environment indicators, supporting area-level assessment, map generation, and exploration of different control-policy scenarios.</p>
    <div class="b1517-table-wrap">
      <table class="b1517-module-table">
        <thead><tr><th scope="col">Module</th><th scope="col">Approach</th><th scope="col">Output</th></tr></thead>
        <tbody>
          <tr><th scope="row">Epidemic risk</th><td>Entropy weighting of vulnerability and hazard indicators</td><td>Grid-level risk scores and maps</td></tr>
          <tr><th scope="row">Travel safety</th><td>Random Forest feature importance and weighted spatial indicators</td><td>Travel safety scores for each grid cell</td></tr>
          <tr><th scope="row">Scenario simulation</th><td>Decision tree cellular automata</td><td>Spatial scenarios under different control policies</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="b1517-section" id="b1517-risk">
  <header class="b1517-section-head"><span class="b1517-number">02</span><h2>Epidemic Risk Assessment</h2></header>
  <div class="b1517-section-body">
    <p>The risk assessment separated vulnerability from hazard. The indicator system combined recent case counts and their surrounding neighborhoods with regional GDP, GDP per capita, population density, hospital-bed availability, and the older population.</p>
    <p>Indicators were normalized according to their direction of influence. The entropy weighting procedure used their distributions across samples to derive indicator weights and calculate vulnerability and hazard scores. These scores were combined into a risk assessment for each 1,000 m × 1,000 m grid cell.</p>
    <figure class="b1517-figure">
      <a class="b1517-image-link" href="{{ '/assets/img/b1517/entropy-risk-workflow.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/img/b1517/entropy-risk-workflow.png' | relative_url }}" alt="Entropy-weighting workflow combining case-related hazard and socioeconomic vulnerability indicators into grid risk scores" width="4500" height="3240" loading="lazy">
      </a>
      <figcaption>Figure 1. Vulnerability and hazard assessment workflow from the supplied English translation. Select the image to view the complete diagram at its original resolution.</figcaption>
    </figure>
    <details class="b1517-detail" id="b1517-entropy">
      <summary>Entropy weighting in six steps</summary>
      <p style="margin-top:18px;font-size:14px;">Let \(x_{ij}\) denote the original value of indicator \(j\) for sample \(i\), with \(m\) samples and \(n\) indicators. The minimum and maximum for each indicator are taken across all samples.</p>
      <ol>
        <li>
          <strong>Normalize positively and negatively oriented indicators.</strong>
          <p style="margin-top:10px;">For a positively oriented indicator:</p>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            z_{ij}=\frac{x_{ij}-\min(x_j)}{\max(x_j)-\min(x_j)}
            \]
          </div>
          <p>For a negatively oriented indicator:</p>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            z_{ij}=\frac{\max(x_j)-x_{ij}}{\max(x_j)-\min(x_j)}
            \]
          </div>
        </li>
        <li>
          <strong>Calculate each sample's proportion within each indicator.</strong>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            p_{ij}=\frac{z_{ij}}{\displaystyle\sum_{r=1}^{m}z_{rj}}
            \]
          </div>
        </li>
        <li>
          <strong>Calculate the information entropy of each indicator.</strong>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            e_j=-k\sum_{i=1}^{m}p_{ij}\ln(p_{ij})
            \]
          </div>
          <p>The normalization coefficient is \(k=1/\ln m\), with \(m&gt;1\).</p>
        </li>
        <li>
          <strong>Calculate information utility from the entropy values.</strong>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            d_j=1-e_j
            \]
          </div>
        </li>
        <li>
          <strong>Normalize information utility to obtain indicator weights.</strong>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            w_j=\frac{d_j}{\displaystyle\sum_{\ell=1}^{n}d_{\ell}}
            \]
          </div>
        </li>
        <li>
          <strong>Combine the weighted indicator contributions into sample scores.</strong>
          <div class="b1517-equation" style="max-width:100%;overflow-x:auto;padding:4px 0;">
            \[
            s_i=\sum_{j=1}^{n}w_jp_{ij}
            \]
          </div>
        </li>
      </ol>
      <p class="b1517-source"><strong>Symbols.</strong> \(z_{ij}\) is the normalized value; \(p_{ij}\) is the sample proportion within indicator \(j\); \(e_j\), \(d_j\), and \(w_j\) are the indicator entropy, information utility, and weight; \(s_i\) is the composite score for sample \(i\).</p>
      <p class="b1517-source">Equations follow the main-text formulation of the translated report. The coefficient \(k=1/\ln m\) is specified using the entropy normalization shown in Figure 1. For \(p_{ij}=0\), use \(p_{ij}\ln(p_{ij})=0\). Nonzero indicator ranges and normalization denominators are required.</p>
    </details>
  </div>
</section>

<section class="b1517-section" id="b1517-travel">
  <header class="b1517-section-head"><span class="b1517-number">03</span><h2>Travel Safety Assessment</h2></header>
  <div class="b1517-section-body">
    <p>The travel safety module used population density, OpenStreetMap road-network data, and points of interest to construct spatial predictor variables. Kernel density estimation, line density estimation, extraction of raster values to points, and spatial joins connected these predictors with the gridded distribution of infected people.</p>
    <p>The Forest-based Classification and Regression tool in GeoScene Pro provided feature-importance scores. The workflow then applied those importance scores to grid-cell indicator values to calculate the travel safety score.</p>
    <figure class="b1517-figure">
      <a class="b1517-image-link" href="{{ '/assets/img/b1517/travel-safety-workflow.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/img/b1517/travel-safety-workflow.png' | relative_url }}" alt="Random Forest travel safety workflow with population, road and POI predictors, gridded case targets, and feature-based assessment" width="3333" height="2422" loading="lazy">
      </a>
      <figcaption>Figure 2. Travel safety assessment using spatial predictors and Random Forest analysis.</figcaption>
    </figure>
    <details class="b1517-detail">
      <summary>Random Forest classification workflow</summary>
      <p class="b1517-source">Random Forest combines multiple decision trees. Each tree produces a classification result, and the ensemble assigns the class with the most votes. The project used the model's feature importance to support the spatial scoring workflow.</p>
      <figure>
        <a class="b1517-image-link" href="{{ '/assets/img/b1517/random-forest-workflow.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/b1517/random-forest-workflow.png' | relative_url }}" alt="Random Forest classification diagram showing decision-tree outputs combined into a final classification" width="3000" height="2020" loading="lazy">
        </a>
        <figcaption>Figure 4. Random Forest classification workflow from the translated report.</figcaption>
      </figure>
    </details>
  </div>
</section>

<section class="b1517-section" id="b1517-simulation">
  <header class="b1517-section-head"><span class="b1517-number">04</span><h2>Epidemic Scenario Simulation</h2></header>
  <div class="b1517-section-body">
    <p>The scenario module used decision tree cellular automata to explore the spatial evolution of infected areas under different control policies. A cellular automaton represents space as a grid of cells, with discrete states and time steps. Local transition rules connect each cell's state with its neighborhood.</p>
    <p>The report describes an implementation in ArcGIS 10.4 using GeoSOS for ArcGIS v2.0.0a. Spatial variables were prepared from points of interest, road networks, and a random raster. Historical and current seven-day cumulative trajectory data were processed to extract transition rules and train the decision-tree model.</p>
    <figure class="b1517-figure">
      <a class="b1517-image-link" href="{{ '/assets/img/b1517/scenario-simulation-workflow.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/img/b1517/scenario-simulation-workflow.png' | relative_url }}" alt="DT-CA scenario workflow from spatial variable preparation and seven-day trajectory processing to transition rules and policy scenarios" width="3333" height="2444" loading="lazy">
      </a>
      <figcaption>Figure 3. Parameter preparation, transition-rule extraction, and scenario simulation using DT-CA.</figcaption>
    </figure>
    <details class="b1517-detail">
      <summary>Decision tree cellular automata implementation</summary>
      <figure>
        <a class="b1517-image-link" href="{{ '/assets/img/b1517/dt-ca-implementation.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/b1517/dt-ca-implementation.png' | relative_url }}" alt="Implementation workflow for the decision tree cellular automata scenario model" width="3333" height="1622" loading="lazy">
        </a>
        <figcaption>Figure 5. DT-CA implementation workflow from the translated report.</figcaption>
      </figure>
    </details>
  </div>
</section>

<section class="b1517-section" id="b1517-implementation">
  <header class="b1517-section-head"><span class="b1517-number">05</span><h2>GIS Implementation</h2></header>
  <div class="b1517-section-body">
    <p>GeoScene Pro ModelBuilder and ArcPy scripts connected spatial data preparation, assessment, and map output into an automated workflow. The project report describes daily epidemic-risk map generation for the four study cities.</p>
    <div class="b1517-grid">
      <div>
        <h3>Data preparation and assessment</h3>
        <p>The public Python scripts cover collection of case-related information, geocoding and coordinate conversion, hazard and vulnerability scoring, and neighborhood processing.</p>
        <p class="b1517-source"><a href="https://github.com/wsy51100/2022-Gold-Medal-B1517-Random-Forest-and-DT-CA-based-Travel-Risk-Assessment-Analysis/tree/main/1.B1517%E4%BB%A3%E7%A0%81" target="_blank" rel="noopener">Browse the Python scripts ↗</a></p>
      </div>
      <div>
        <h3>Geospatial models</h3>
        <p>The repository also provides the project's GIS toolbox, alongside the scripts used for spatial processing and assessment.</p>
        <p class="b1517-source"><a href="https://github.com/wsy51100/2022-Gold-Medal-B1517-Random-Forest-and-DT-CA-based-Travel-Risk-Assessment-Analysis/tree/main/2.B1517%E6%A8%A1%E5%9E%8B%E8%84%9A%E6%9C%AC" target="_blank" rel="noopener">Browse the model toolbox ↗</a></p>
      </div>
    </div>
  </div>
</section>

<section class="b1517-section" id="b1517-features">
  <header class="b1517-section-head"><span class="b1517-number">06</span><h2>Project Features &amp; Resources</h2></header>
  <div class="b1517-section-body">
    <ul class="b1517-features">
      <li><strong>Grid-based analysis.</strong> The 1 km grid represents variation within each city and provides a common spatial unit for the assessment.</li>
      <li><strong>Multiple data sources.</strong> Epidemic observations, socioeconomic indicators, population, roads, and points of interest contribute to the risk and travel-safety workflows.</li>
      <li><strong>Automated GIS processing.</strong> ModelBuilder and ArcPy connect data processing, score calculation, and map production.</li>
      <li><strong>Policy scenario exploration.</strong> DT-CA links spatial transition rules with simulated epidemic patterns under different control policies.</li>
    </ul>
    <nav class="b1517-resources" aria-label="Source materials">
      <a href="https://github.com/wsy51100/2022-Gold-Medal-B1517-Random-Forest-and-DT-CA-based-Travel-Risk-Assessment-Analysis" target="_blank" rel="noopener">GitHub repository ↗</a>
      <a href="https://mp.weixin.qq.com/s/_CX0UZ5PmPzmuD2FMFDe1g" target="_blank" rel="noopener">Original Chinese article ↗</a>
    </nav>
    <p class="b1517-source">Text and figures are based on the supplied English translation of Project B1517. Team and institutional credits follow the project repository.</p>
  </div>
</section>

</div>
