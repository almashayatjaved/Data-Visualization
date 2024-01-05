<script>
  import "bootstrap/dist/css/bootstrap.min.css";

  import { Link } from "svelte-routing";

  let navigationLinks = [
    { text: "Go to Bar", link: "/bar" },
    { text: "Go to Scatterplot", link: "/scatterplot" },
    { text: "Go to Pie Chart", link: "/piechart" },
    { text: "Go to Table", link: "/table" },
    { text: "Go to StackBar", link: "/stackbar" },
    { text: "Go to Histogram", link: "/histogram" },
    { text: "Go to HeatMap", link: "/heatmap" },
    { text: "Go to TreeMap", link: "/treemap" },
    { text: "Go to PopulationPyramids", link: "/populationpyramids" },
    { text: "Go to VerticalPyramids", link: "/verticalpyramids" },
  ];
</script>

<main class="text-center">
  <div class="navbar bg-[#1a9496] border rounded" style="height: 10vh;">
    {#each navigationLinks as { text, link }}
      <Link
        to={link}
        class="text-light nav-link"
        style="font-weight:bold; margin: 0 15px;font-size: 18px; transition: color 0.3s ease-in-out; text-decoration: none;"
        >{text}</Link
      >
    {/each}
  </div>
  <div style="height: 75vh; background-color:#20354c" class="witw-100 d-flex">
    <div
      class=" w-50 d-flex flex-column align-items-center justify-content-center"
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="/images/23.jpg"
        class=" rounded-circle"
        style="height: 60%; width: 45%"
        alt="my image"
      />
    </div>
    <div
      class="w-50 d-flex text-light flex-column align-items-center justify-content-center"
    >
      <h1 class="font-sans-serif text-light fs-3" style="font-weight:bold">
        Meet Almas Javed
      </h1>
      <p class="w-50">
        Passionate about transforming complex datasets into compelling visual
        narratives. Armed with expertise in
        data analysis and visualization tools, I bring data to life, making it
        accessible and insightful for a wide audience.
      </p>
    </div>
  </div>
  <footer class="text-center">
    <div class="container footer-content">
      <div class="row">
        <div class="col-md-6">
          <p class="mb-0">Follow me on GitHub:</p>
          <a
            href="https://github.com/almashayatjaved"
            target="_blank"
            class="text-dark"
          >
            <img
              class="w-35"
              style="height: 30px;"
              src="/images/github.png"
              alt="GitHub"
            />
          </a>
        </div>
        <div class="col-md-6 contact-info">
          <p class="mb-0">Contact me via email:</p>
          <a href="mailto:radientDev03@gmail.com" class="text-dark">
            <img
              class="w-35"
              style="height: 30px;"
              src="/images/gmail-logo.png"
              alt="Gmail"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- <svg>

	</svg> -->
</main>

<style>
  main {
    /* text-align: center; */
    max-width: 100%;
    /* margin: 0 auto; */
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  svg {
    border: 1px solid gray;
    width: 50%;
    height: 30vh;
  }
  .navbar {
    background-color: #1a9496; /* Light Purple background */
    padding: 20px;
    text-align: center;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }
  footer {
    background-color: #f8f9fa; /* Light background color */
  }

  .footer-content {
    padding: 20px 0; /* Adjust top and bottom padding */
  }

  .contact-info {
    margin-top: 10px; /* Add margin at the top of the contact info */
  }
</style>
