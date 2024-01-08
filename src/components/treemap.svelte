<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-routing"
    import * as d3 from 'd3';
  
    // Example hierarchical data
    let data = {
      name: 'Root',
      children: [
        { name: 'Category A', value: 30 },
        { name: 'Category B', value: 50 },
        { name: 'Category C', value: 10 },
        { name: 'Category D', value: 20 },
        { name: 'Category E', value: 20 },
        { name: 'Category F', value: 30 },
        { name: 'Category G', value: 10 },
        { name: 'Category H', value: 10 },
        { name: 'Category I', value: 20 },
      ],
    };
  
    onMount(() => {
      const width = 600;
      const height = 400;
  
      const svg = d3.select('#treemapContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
  
      // Create a treemap layout
      const treemap = d3.treemap()
        .size([width, height])
        .padding(1)
        .round(true);
  
      // Generate the treemap layout from the hierarchical data
      const root = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
  
      treemap(root);
  
      // Render rectangles based on the treemap layout
      svg.selectAll('rect')
        .data(root.leaves())
        .enter()
        .append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .style('fill', 'steelblue');
  
      // Add text labels
      svg.selectAll('text')
        .data(root.leaves())
        .enter()
        .append('text')
        .attr('x', d => d.x0 + 5)
        .attr('y', d => d.y0 + 15)
        .text(d => d.data.name)
        .style('font-size', '10px')
        .style('fill', 'white');
    });
  </script>
  
  <style>
    /* Container styling */
    #treemapContainer {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ecf0f1; /* Light gray background */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
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
  <div id="treemapContainer"></div>
</main>
  