<script>
  import Table from "../components/table.svelte";

  let description;

  description =
    "Tables in data visualization organize information in a structured grid of rows and columns, making it easy to display and compare data values. They are effective for presenting precise numerical details or categorical information, providing a clear and organized format for analysis. Tables are commonly used in reports and presentations to convey detailed data efficiently, offering a straightforward way to present information without the visual abstraction of charts or graphs.";
</script>

<main class="container mt-5">
  <div class="row d-flex flex-row justify-content-center align-items-center">
    <!-- Left section for description -->
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Table in Data visualization</h3>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>

    <!-- Right section for image -->
    <div class="col-md-6">
      <div class="card">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
        <Table />
      </div>
    </div>
  </div>
</main>

<style>
</style>
