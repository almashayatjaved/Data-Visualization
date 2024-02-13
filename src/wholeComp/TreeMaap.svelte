<script>
    import TreeMaap from "../components/treemap.svelte";
  
    let description;
  
    description =
      " A treemap is a visualization technique that represents hierarchical data as nested rectangles within a larger rectangle. Each branch of the hierarchy is assigned a colored rectangle, and the size of each rectangle corresponds to a quantitative value, such as the proportion of a total.  ";
  </script>
  
  <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
          
          <div class="col-md-6">
              <div class="textColor">
                  <div class="card-body">
                    <h3 class="card-title text-start my-4">TreeMap in Data visualization</h3>
                    <p class="card-text text-start">{description}</p>
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

    h3{
    color: #28267d;
  }
  p{
    color: #505f98;
  }
  </style>
  