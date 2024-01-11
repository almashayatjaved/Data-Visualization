<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing"
  import * as d3 from 'd3';

  let data = [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
    [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
    [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
    [70, 65, 60, 55, 50, 45, 40, 35, 30, 25],
    [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    [80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
    [15, 25, 35, 45, 55, 65, 75, 85, 95, 100],
    [40, 50, 60, 70, 80, 90, 100, 90, 80, 70],
    [60, 70, 80, 90, 100, 90, 80, 70, 60, 50],
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const employees = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6', 'Employee 7', 'Employee 8', 'Employee 9', 'Employee 10'];

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
      .attr('x', (d, i) => (i % data[0].length) * (width / data[0].length))
      .attr('y', (d, i) => Math.floor(i / data[0].length) * (height / data.length))
      .attr('width', width / data[0].length - 1)
      .attr('height', height / data.length - 1)
      .style('fill', d => colorScale(d))

    // Add month labels
    svg.selectAll('.monthLabel')
      .data(months)
      .enter()
      .append('text')
      .attr('class', 'monthLabel')
      .attr('x', (d, i) => (i + 0.5) * (width / months.length))
      .attr('y', height + 30)
      .style('text-anchor', 'middle')
      .style('color', "white")
      .text(d => d);

    // Add employee labels
    svg.selectAll('.employeeLabel')
      .data(employees)
      .enter()
      .append('text')
      .attr('class', 'employeeLabel')
      .attr('x', -50)
      .attr('y', (d, i) => (i + 0.5) * (height / employees.length))
      .style('text-anchor', 'end')
      .style('color', "white")
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
