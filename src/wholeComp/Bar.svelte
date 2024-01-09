<script>
  import Bar from "../components/bar.svelte";

  let description;

  description =
    "Bars in data visualization refer to a common graphical element used to represent and compare values in a dataset. Bar charts display data using rectangular bars where the length or height of each bar corresponds to the magnitude of the associated value. This visual representation is particularly effective for showcasing comparisons between different categories or groups. Bar charts are versatile and can be horizontal or vertical, making them suitable for various types of data and analytical purposes. They are widely used in reports, dashboards, and presentations to convey trends, patterns, and variations in a straightforward manner.";
</script>

<main class="container mt-5">
  <div class="row d-flex flex-row justify-content-center align-items-center">
    <!-- Left section for description -->
    <div class="col-md-6">
      <div class="card">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
        <Bar />
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Table in Data visualization</h3>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>

    <!-- Right section for image -->
  </div>
</main>

<style>
</style>
