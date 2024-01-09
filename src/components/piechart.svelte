<script>
    import { Link } from "svelte-routing"
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let departmentsData = [
      { name: "Computer Science", value: 30 },
      { name: "Information Technology", value: 20 },
      { name: "Information Technology", value: 23 },
      { name: "Information Technology", value: 35 },
      { name: "Information Technology", value: 19 },
      { name: "Information Technology", value: 10 },
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
              '#2b54a1',
              '#34b3e7',
              '#eb601a',
              '#f6a418',
              '#66c6df',
              '#438ac9',
              '##66c6df',
              '#fecf17',
            ],
            borderWidth: 0,
            marginTop:"150px",
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
    canvas{
      padding: 60px;
      color:white;
      
    }
  </style>


    <canvas id="departmentsChart"></canvas>

  