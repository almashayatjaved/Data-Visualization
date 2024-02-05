<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import TableComponent from "./wholeComp/Table.svelte";
  import BarComponent from "./wholeComp/Bar.svelte";
  import HeatMapComponent from "./wholeComp/HeatMap.svelte";
  import HistogramComponent from "./wholeComp/Histogram.svelte";
  import PieChartComponent from "./wholeComp/PieChart.svelte";
  import PopulationPyramidComponent from "./wholeComp/PopulationPyramid.svelte";
  import ScatterplotComponent from "./wholeComp/ScatterPlot.svelte";
  import StackbarComponent from "./wholeComp/Stackbar.svelte";
  import TreeMaapComponent from "./wholeComp/TreeMaap.svelte";
  import VerticalPyramidComponent from "./wholeComp/VerticalPyramid.svelte";

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
  <div
    class="navbar bg-[#1a9496] text-505F98 border rounded"
    style="height: 10vh;"
  >
    {#each navigationLinks as { text, link }}
      <Link
        to={link}
        class="nav-link"
        style="font-weight:bold; margin: 0 15px;font-size: 18px; transition: color 0.3s ease-in-out; text-decoration: none;"
        >{text}</Link
      >
    {/each}
  </div>
  <div style="height: 75vh;" class="witw-100 d-flex home">
    <div
      class="w-60 lh-lg d-flex text-light flex-column align-items-center justify-content-center"
    >
      <div class="d-flex flex-column align-items-start w-50">
        <h1 class="font-sans-serif text-28267d fs-3" style="font-weight:bold">
          Meet Almas Javed
        </h1>
        <p class="w-50 text-start">
          Passionate about transforming complex datasets into compelling visual
          narratives. Armed with expertise in data analysis and visualization
          tools, I bring data to life, making it accessible and insightful for a
          wide audience.
        </p>
        <button class="border border-0 text-light px-3"
          >Check out Data Visualisation</button
        >
      </div>
    </div>
  </div>
  <div class="background p-5">
    <TableComponent />
  </div>
  <div>
    <BarComponent />
  </div>
  <div>
    <HeatMapComponent />
  </div>
  <div>
    <HistogramComponent />
  </div>
  <div>
    <PieChartComponent />
  </div>
  <!-- <div>
    <VerticalPyramidComponent />
  </div> -->
  <div>
    <PopulationPyramidComponent />
  </div>
  <div>
    <ScatterplotComponent />
  </div>
  <div>
    <StackbarComponent />
  </div>
  <div>
    <TreeMaapComponent />
  </div>
  <div
    class="learn d-flex flex-column justify-content-center align-items-center"
    style="height: 80vh;"
  >
    <div class="w-40 d-flex justify-content-around  w-100">
      <div class=" w-50 d-flex justify-content-center">
        <div class="w-50 text-start">
          <h1 class="child fw-bold">Where to find Course</h1>
          <p class="child">
            You can visit coursera for free course and learn Data visualization
            wit svelte. Also, there are alot of documentation and the whole
            entire community for Data visualization in svelte.
          </p>
        </div>
      </div>
      <div class=" w-50">
        <h1 class="child fw-bold">Free of cost</h1>
        <h4 class="child">Go for it...</h4>
        <button class="child  border-0 text-light px-3"
          ><a href="https://www.coursera.org/" class="text-decoration-none text-light">Visit Coursera</a></button
        >
      </div>
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

  main .home {
    background-image: url("/images/designer_1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  h1 {
    color: #091133;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 500;
  }
  h3 {
    color: #091133;
  }
  p {
    color: #505f98;
  }

  svg {
    border: 1px solid gray;
    width: 50%;
    height: 30vh;
  }
  .navbar {
    /* background-color: #1a9496;  */
    padding: 20px;
    text-align: center;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }
  button {
    background-color: #141719;
  }
  .learn {
    background-image: url("/images/Rectangle.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }
  .child {
    margin-top: 10px;
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
  /* .background {
    background-color: #06133d;
  } */
</style>
