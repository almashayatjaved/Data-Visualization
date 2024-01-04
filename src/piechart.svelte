<script>
    import { Link } from "svelte-routing"
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let departmentsData = [
      { name: "Computer Science", value: 30 },
      { name: "Information Technology", value: 20 },
      { name: "Data Science", value: 15 },
      { name: "Development", value: 20 },
    ];
  
    let chart;
  
    onMount(() => {
      const chartForDep = document.getElementById('departmentsChart').getContext('2d');
      chart = new Chart(chartForDep, {
        type: 'pie',
        data: {
          labels: departmentsData.map(department => department.name),
          datasets: [{
            data: departmentsData.map(department => department.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(165, 55, 253, 0.8)',
            ],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
  </script>
  
  <style>
    main{
      background-color: #20354c; /* Light Purple background */
      height: 90vh;
    }
    canvas{
      padding: 60px;
      color:white;
      
    }
  </style>


<button type="button" class="btn btn-primary rounded-5 btn-lg my-2"><a class="text-light text-decoration-none" href="/">Go to Home</a></button>
<main>
    <canvas id="departmentsChart"></canvas>
  </main>

  