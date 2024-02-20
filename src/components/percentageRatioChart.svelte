<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let chart;

  // Sample data
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "Percentage Ratio Comparison",
        data: [30, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  onMount(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "50%", // Half of the radius will be used as the cutout radius
        rotation: -0.5 * Math.PI, // Starts at the top (12 o'clock position)
        // circumference: 1.5 * Math.PI, // Makes the chart go only three-quarters of the way around
        animation: {
          duration: 2000, // Animation duration in milliseconds
          easing: "easeInOutQuart", // Easing function for the animation
        },
        hoverOffset: 6, // Increases the hover effect
        plugins: {
          // You can add custom plugins here, such as tooltips
          tooltip: {
            enabled: true,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleColor: "white",
            bodyColor: "white",
            callbacks: {
              label: function (context) {
                // Customize tooltip label here
                return (
                  context.dataset.label + ": " + context.formattedValue + "%"
                );
              },
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
          align: "start", // Aligns the legend to the start of the container
          labels: {
            font: {
              size: 14, // Increases the font size of legend labels
            },
            color: "blue", // Sets the color of legend labels to blue
          },
        },
      },
    });
  });

  // // This function updates the chart when data changes
  // function updateChart() {
  //   chart.data.datasets[0].data = [40, 30, 30]; // Example update data
  //   chart.update();
  // }
</script>

<div>
  <canvas id="myChart"></canvas>
</div>

<style>
  canvas {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
