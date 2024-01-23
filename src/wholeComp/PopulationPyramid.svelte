<script>
    import PopulationPyramid from "../components/populationpyramids.svelte";
    
      let description;
    
      description ="A population pyramid is a graphical representation of age and gender distribution within a population. It consists of two bar graphs, one for each gender, with age cohorts on the horizontal axis. The shape of the pyramid reflects demographic trends, such as population growth or aging."
        </script>
    
    <main class="container mt-5">
      <div class="row d-flex flex-row justify-content-center align-items-center">
        <!-- Left section for description -->
        
        <div class="col-md-8">
          <div class="">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
            <PopulationPyramid />
          </div>
        </div>
        <div class="col-md-4">
            <div class="textColor">
                <div class="card-body">
                    <h3 class="card-title">PopulationPyramid in Data visualization</h3>
                    <p class="card-text">{description}</p>
                </div>
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
    