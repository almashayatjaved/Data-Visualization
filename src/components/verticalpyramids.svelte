<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    // Example data for age and gender distribution
    let data = [
      { age: '0-5', male: 150, female: 160 },
      { age: '6-10', male: 120, female: 130 },
      { age: '11-15', male: 180, female: 190 },
      { age: '16-20', male: 200, female: 210 },
      { age: '21-25', male: 160, female: 170 },
      { age: '26-30', male: 130, female: 140 },
      { age: '31-35', male: 90, female: 100 },
      { age: '36-40', male: 60, female: 167 },
      { age: '41-45', male: 30, female: 34 },
      { age: '46-50', male: 30, female: 94 },
      { age: '51-55', male: 30, female: 87 },
      { age: '56-60', male: 30, female: 92 },
      { age: '61-65', male: 30, female: 130 },
      { age: '66-70', male: 30, female: 120 },
      { age: '71-75', male: 30, female: 40 },
      { age: '76-80', male: 30, female: 78 },
      { age: '81-85', male: 30, female: 168 },
      { age: '86-90', male: 30, female: 200 },
      { age: '91-95', male: 30, female: 53 },
      { age: '95+', male: 30, female: 200 },
    ];
  
    onMount(() => {
      const width = 600;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  
      const svg = d3.select('#pyramidContainer')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Create scales
      const xScale = d3.scaleBand()
        .domain(data.map(d => d.age))
        .range([0, width])
        .padding(0.1);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.male, d.female))])
        .range([height, 0]);
  
      // Draw rectangles for male population
      svg.selectAll('.male')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'male')
        .attr('x', d => xScale(d.age))
        .attr('y', d => yScale(d.male))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.male))
        .style('fill', 'blue');
  
      // Draw rectangles for female population
      svg.selectAll('.female')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'female')
        .attr('x', d => xScale(d.age))
        .attr('y', d => yScale(d.female))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.female))
        .style('fill', 'pink');
    });
  </script>
  
  <style>
    /* Container styling */
    #pyramidContainer {
      max-width: 600px;
      border-bottom: 1px solid gray;
    }
  </style>
  
  <!-- Container for the vertical population pyramid -->

  <div id="pyramidContainer"></div>
  