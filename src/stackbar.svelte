<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-routing"
    import Chart from 'chart.js/auto';
  
    let chart; 
  
    let departmentData = [
      { department: 'IT Services', income: 500000 },
      { department: 'Software Development', income: 300000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 }
    ];
  
    onMount(() => {
      const ctx = document.getElementById('incomeChart').getContext('2d');
  
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: departmentData.map(entry => entry.department),
          datasets: [
            {
              label: 'Annual Income',
              data: departmentData.map(entry => entry.income),
              backgroundColor: '#3498db', 
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              stacked: true,
              ticks: {
                callback: value => `$${value.toFixed(2)}`, 
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

  <canvas id="incomeChart"></canvas>
</main>
  