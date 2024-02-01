<script>
    import Scatterplot from "../components/scatterplot.svelte";
    
      let description;
    
      description ="A scatterplot is a visual representation of data points in a Cartesian coordinate system, where each point represents the values of two variables. The position of the points on the graph helps identify patterns, correlations, or trends between the variables, providing insights into their relationship. Scatterplots are widely used in statistical analysis and data visualization."
        </script>
    
    <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
        <!-- Left section for description -->
        
        <div class="col-md-4">
            <div class="textColor">
                <div class="card-body">
                    <h3 class="card-title">ScatterPlot in Data visualization</h3>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
              <Scatterplot />
            </div>
          </div>
    
        <!-- Right section for image -->
      </div>
    </main>
    
    <style>

  h3{
    color: #28267d;
  }
  p{
    color: #505f98;
  }
    </style>
    