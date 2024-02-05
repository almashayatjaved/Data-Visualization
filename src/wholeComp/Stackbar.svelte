<script>
  import StackBar from "../components/stackbar.svelte";

  let description;

  description =
    "A stacked bar chart is a visual representation of data that uses horizontal or vertical bars to display the composition of a whole, broken down into segments."
    </script>

    <main class="container mt-5">
    <div class="row d-flex flex-row justify-content-center align-items-center">
        <div class="col-md-8">
            <div class="">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <!-- <img src="/images/table.png" class="card-img-top" alt="Image" /> -->
                <StackBar />
            </div>
        </div>

        <div class="col-md-4">
           <div class="textColor">
           <div class="card-body">
            <h3 class="card-title text-start my-4">StackBar in Data visualization</h3>
            <p class="card-text text-start">{description}</p>
           </div>
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
