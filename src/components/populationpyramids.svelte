<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    // Example data for age and gender distribution
    let data = [
      { age: '0-9', male: 150, female: 160 },
      { age: '10-19', male: 120, female: 130 },
      { age: '20-29', male: 180, female: 190 },
      { age: '30-39', male: 200, female: 210 },
      { age: '40-49', male: 160, female: 170 },
      { age: '50-59', male: 130, female: 140 },
      { age: '60-69', male: 90, female: 100 },
      { age: '70-79', male: 60, female: 70 },
      { age: '80+', male: 30, female: 40 },
    ];
  
    onMount(() => {
      const width = 400;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  
      const svg = d3.select('#pyramidContainer')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Create scales
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.male, d.female))])
        .range([0, width]);
  
      const yScale = d3.scaleBand()
        .domain(data.map(d => d.age))
        .range([height, 0])
        .padding(0.1);
  
      // Draw rectangles for male population
      svg.selectAll('.male')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'male')
        .attr('x', d => xScale(0))
        .attr('y', d => yScale(d.age))
        .attr('width', d => xScale(d.male))
        .attr('height', yScale.bandwidth())
        .style('fill', 'blue');
  
      // Draw rectangles for female population
      svg.selectAll('.female')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'female')
        .attr('x', d => xScale(-d.female))
        .attr('y', d => yScale(d.age))
        .attr('width', d => xScale(d.female))
        .attr('height', yScale.bandwidth())
        .style('fill', 'pink');
    });
  </script>
  
  <style>
    /* Container styling */
    #pyramidContainer {
      max-width: 600px;
      /* margin: 20px; */
      background-color: #20354c; /* Light gray background */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    main{
      background-color: #20354c; /* Light Purple background */
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
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

    <div id="pyramidContainer"></div>
  </main>
  