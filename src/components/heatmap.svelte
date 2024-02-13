<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  // Generating random data for demonstration
  function generateData(months, employees) {
    return Array.from({ length: months.length }, () =>
      Array.from({ length: employees.length }, () =>
        Math.floor(Math.random() * 101) // Random value between 0 and 100
      )
    );
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const employees = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6', 'Employee 7', 'Employee 8', 'Employee 9', 'Employee 10'];

  let data = generateData(months, employees);

  onMount(() => {
    const width = 800;
    const height = 400;

    const svg = d3.select('#heatmapContainer')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const colorScale = d3.scaleLinear()
      .domain([0, d3.max(data.flat())])
      .range(['white', 'steelblue']);

    svg.selectAll('rect')
      .data(data.flat())
      .enter()
      .append('rect')
      .attr('x', (d, i) => (i % employees.length) * (width / employees.length))
      .attr('y', (d, i) => Math.floor(i / employees.length) * (height / months.length))
      .attr('width', width / employees.length - 1)
      .attr('height', height / months.length - 1)
      .style('fill', d => colorScale(d));

    // Adding data labels
    svg.selectAll('.dataLabel')
      .data(data.flat())
      .enter()
      .append('text')
      .attr('class', 'dataLabel')
      .attr('x', (d, i) => (i % employees.length) * (width / employees.length) + (width / employees.length) / 2)
      .attr('y', (d, i) => Math.floor(i / employees.length) * (height / months.length) + (height / months.length) / 2)
      .attr('dy', '0.35em') // Center text vertically
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .text(d => d);

    // Add month labels
    svg.selectAll('.monthLabel')
      .data(months)
      .enter()
      .append('text')
      .attr('class', 'monthLabel')
      .attr('x', width + 10)
      .attr('y', (d, i) => (i + 0.5) * (height / months.length))
      .style('text-anchor', 'start')
      .style('fill', 'black')
      .text(d => d);

    // Add employee labels
    svg.selectAll('.employeeLabel')
      .data(employees)
      .enter()
      .append('text')
      .attr('class', 'employeeLabel')
      .attr('x', (d, i) => (i + 0.5) * (width / employees.length))
      .attr('y', -10)
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .text(d => d);
  });
</script>

<main>
  <div id="heatmapContainer"></div>
</main>

<style>
  #heatmapContainer {
    max-width: 800px;
    margin: auto; /* Center horizontally */
    /* margin-top: 30px; Adjust top margin for vertical centering */
    background-color: #ecf0f1;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
