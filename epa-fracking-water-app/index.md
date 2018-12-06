---
layout: default
---
<div class="jumbotron">
  <h1>What factors impact our water?</h1>
  <p class="small">{{ site.about.label }}: {{ site.timestamp }}</p>
  <p class="lead">Let's take the EPA's 2016 report on the <a href="https://www.epa.gov/sites/production/files/2016-12/documents/hfdwa_executive_summary.pdf">Impacts from the Hydraulic Fracturing Water Cycle</a> and understand if our communities are more or less at risk. An informed and engaged community is vital in maintaining clean water standards.</p>
  <p>The navigation menu represents each stage of the hydraulic fracturing water cycle. Examine the data we have on your community. Are the factors more likely than other populations to result in more frequent or more severe impacts?</p>
  {% include social.html %}
</div> 

<div class="container-fluid">
  <div class="row">
    <div class="col">
      {% include fracking-water-cycle.md %}
    </div>
    <div class="col">
      {% include epa-conclusions.md %}
    </div>
  </div>
</div>