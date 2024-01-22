<script>
  import Bar from "../components/bar.svelte";

  let description;

  description =
    "Bars in data visualization refer to a common graphical element used to represent and compare values in a dataset. Bar charts display data using rectangular bars where the length or height of each bar corresponds to the magnitude of the associated value. ";
</script>

<main class="container mt-5">
  <div class="row d-flex flex-row justify-content-center align-items-center">
    <!-- Left section for description -->
    <div class="col-md-6">
      <div class=" py-5">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
        <Bar />
      </div>
    </div>
    <div class="col-md-6">
      <div class="textColor">
        <div class="card-body">
          <h3 class="card-title">Bars in Data visualization</h3>
          <p class="card-text">{description}</p>
        </div>
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
