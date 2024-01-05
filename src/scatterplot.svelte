<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    // More complex example data for a scatter plot
    let data = [
      { id: 1, x: 5, y: 10, category: 'A' },
      { id: 2, x: 15, y: 30, category: 'B' },
      { id: 3, x: 25, y: 15, category: 'A' },
      { id: 4, x: 35, y: 25, category: 'B' },
      { id: 5, x: 45, y: 20, category: 'A' },
      { id: 6, x: 55, y: 35, category: 'B' },
      { id: 7, x: 65, y: 45, category: 'A' },
      { id: 8, x: 75, y: 60, category: 'B' },
      { id: 9, x: 85, y: 50, category: 'A' },
      { id: 10, x: 95, y: 70, category: 'B' },
      { id: 11, x: 20, y: 40, category: 'C' },
      { id: 12, x: 40, y: 60, category: 'C' },
      { id: 13, x: 60, y: 80, category: 'C' },
      { id: 14, x: 80, y: 100, category: 'C' },
      // Add 20 more rows for category A
      ...Array.from({ length: 35 }, (_, index) => ({ id: index + 15, x: Math.random() * 100, y: Math.random() * 100, category: 'A' })),
      // Add 20 more rows for category B
      ...Array.from({ length: 20 }, (_, index) => ({ id: index + 35, x: Math.random() * 100, y: Math.random() * 100, category: 'B' })),
      // Add 20 more rows for category C
      ...Array.from({ length: 55 }, (_, index) => ({ id: index + 55, x: Math.random() * 100, y: Math.random() * 100, category: 'C' })),
    ];
  
    onMount(() => {
      const width = 800;
      const height = 700;
      const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  
      const svg = d3.select('#scatterplotContainer')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Create scales
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.x)])
        .range([0, width]);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.y)])
        .range([height, 0]);
  
      const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.category))
        .range(d3.schemeCategory10);
  
      // Draw circles for each data point
      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 5)
        .style('fill', d => colorScale(d.category))
        .style('opacity', 0.7);
  
      // Add axes
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);
  
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);
  
      svg.append('g')
        .attr('class', 'y-axis')
        .call(yAxis);
    });
  </script>
  
  <style>
    /* Container styling */
    #scatterplotContainer {
      max-width: 1000px;
      /* margin-left: 20px; */
      background-color: #1a9496; /* Light Purple background */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    main{
      background-color: #20354c; /* Light Purple background */
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;;
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
  <!-- Container for the scatter plot -->
  <main>
      <div id="scatterplotContainer"></div>

  </main>
  