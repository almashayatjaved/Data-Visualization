<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart; // Reference to the chart instance
  
    let departmentData = [
      { department: 'IT Services', income: 500000 },
      { department: 'Software Development', income: 300000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      { department: 'Networking', income: 200000 },
      // Add more departments and income data as needed
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
              backgroundColor: '#3498db', // Blue color for the bars
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
   
  </style>
  
  <canvas id="incomeChart"></canvas>
  