<script>
    import TreeMaap from "../components/treemap.svelte";
  
    let description;
  
    description =
      "A heatmap in data visualization is a graphical representation that uses color to depict the magnitude of values in a matrix. ";
  </script>
  
  <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
          
          <div class="col-md-6">
              <div class="textColor">
                  <div class="card-body">
                      <h3 class="card-title">PopulationPyramid in Data visualization</h3>
                      <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
                    <TreeMaap />
                </div>
            </div>
        </div>
  </main>
  
  <style>
    .textColor {
      color: #8090c4;
    }
  </style>
  