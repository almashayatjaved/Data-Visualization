<script>
    import Verticalpyramids from "../components/verticalpyramids.svelte";
  
    let description;
  
    description =
      "A heatmap in data visualization is a graphical representation that uses color to depict the magnitude of values in a matrix. ";
  </script>
  
  <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
          
          
            <div class="col-md-8">
                <div class="">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
                    <Verticalpyramids />
                </div>
            </div>
            <div class="col-md-4">
                <div class="textColor">
                    <div class="card-body">
                        <h3 class="card-title">TreeMap in Data visualization</h3>
                        <p class="card-text">{description}</p>
                      </div>
                  </div>
              </div>
        </div>
  </main>
  
  <style>
    .textColor {
      color: #8090c4;
    }
  </style>
  