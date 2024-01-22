<script>
    import PieChart from "../components/piechart.svelte";
    
      let description;
    
      description ="A pie chart is a circular statistical graphic that is divided into slices to illustrate numerical proportions. Each slice represents a proportion of the whole, with the size of each slice corresponding to the percentage or absolute value of the data it represents. Pie charts are commonly used to visualize the distribution of categories in a dataset and are effective for conveying relative proportions in a visually intuitive way."
        </script>
    
    <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
        <!-- Left section for description -->
        <div class="col-md-4">
            <div class="textColor">
                <div class="card-body">
                    <h3 class="card-title">PieChart in Data visualization</h3>
                    <p class="card-text">{description}</p>
                  </div>
              </div>
          </div>
        <div class="col-md-8">
          <div class="">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
            <PieChart />
          </div>
        </div>
    
        <!-- Right section for image -->
      </div>
    </main>
    
    <style>
                .textColor{
    color:#8090c4
  }
    </style>
    