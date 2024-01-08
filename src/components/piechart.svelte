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
    canvas{
      padding: 60px;
      color:white;
      
    }
  </style>

<div class="navbar bg-[#1a9496] border rounded " style="height: 10vh;">

  <button type="button" class="btn btn-primary rounded-5 btn-lg mx-20 me-5 ms-5 p-2 border-0"><a class="text-light text-decoration-none" href="/">Home</a></button>
</div>
<main>
    <canvas id="departmentsChart"></canvas>
</main>

  