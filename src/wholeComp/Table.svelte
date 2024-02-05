<script>
  import Table from "../components/table.svelte";


  let description;
  let textColor = "#7886b2"

  description =
    "Tables in data visualization organize information in a structured grid of rows and columns, making it easy to display and compare data values. They are effective for presenting precise numerical details or categorical information, providing a clear and organized format for analysis. ";
</script>

<main class="container mt-5">
  <div class=" row d-flex flex-row  justify-content-center align-items-center">
    <!-- Left section for description -->
    <div class="col-md-6" >
      <div class="background" style="width: 70%;">
        <div class="card-body text-start">
          <h3 class="card-title">Table in Data visualization</h3>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>

    <!-- Right section for image -->
    <div class="col-md-6">
      <div class="">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
        <Table />
      </div>
    </div>
  </div>
</main>

<style>
  /* .background {
    background-color: #06133d;
  } */
  .container{
    max-width: fit-content;
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h3{
    color: #28267d;
  }
  p{
    color: #505f98;
  }
</style>
