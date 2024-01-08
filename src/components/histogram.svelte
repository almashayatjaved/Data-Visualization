<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart; // Reference to the chart instance
  
    let data = [10, 20, 15, 25, 30, 18, 22, 16, 28, 35, 40, 32];
  
    onMount(() => {
      const histogram = document.getElementById('histogramChart').getContext('2d');
  
      chart = new Chart(histogram, {
        type: 'bar',
        data: {
          labels: data.map((_, index) => index + 1), // Labels as 1, 2, 3, ...
          datasets: [
            {
              label: 'Frequency',
              data: data,
              backgroundImage: "linear-gradient('to right top, #1d552b, #006a5d, #007c9e, #0086d8, #7281f2')"
             },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Bins',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Frequency',
              },
            },
          },
        },
      });
    });
  </script>
  
  <style>
   main{
      background-color: #20354c; /* Light Purple background */
      height: 90vh;
    }
    .navbar{

    background-color: #1a9496; /* Light Purple background */
    }
    button{
      /* padding: 10px; */
    /* margin-inline: 50px; */
    background-color: #20364c;
    }
  </style>
  
  <div class="navbar bg-[#1a9496] border rounded " style="height: 10vh;">

    <button type="button" class="btn btn-primary rounded-5 btn-lg mx-20 me-5 ms-5 p-2 border-0"><a class="text-light text-decoration-none" href="/">Home</a></button>
  </div>
  <main>

    <canvas id="histogramChart"></canvas>
  </main>
  