<script>
  import Heatmap from "../components/heatmap.svelte";
    import HeatMap from "../components/heatmap.svelte";
  
    let description;
  
    description ="A heatmap in data visualization is a graphical representation that uses color to depict the magnitude of values in a matrix.Heatmaps are effective for highlighting patterns, trends, or variations in large datasets, making them particularly useful for visualizing relationships and identifying clusters of high or low values. This visual technique is commonly employed in areas such as data analysis, biology, and finance to provide a quick and intuitive overview of complex information."
      
      </script>
  
  <main class="container mt-5">
    <div class="row d-flex flex-row justify-content-center align-items-center">
      <!-- Left section for description -->
      <div class="col-md-4">
          <div class="">
              <div class="card-body">
                  <h3 class="card-title">Table in Data visualization</h3>
                  <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
          <div class="">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
            <Heatmap />
          </div>
        </div>
  
      <!-- Right section for image -->
    </div>
  </main>
  
  <style>
  </style>
  