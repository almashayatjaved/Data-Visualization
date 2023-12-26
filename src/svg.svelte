<script>
	
	import { Link } from "svelte-routing"
 

	let navigationLinks = [
    { text: 'Go to Bar', link: '/bar' },
    { text: 'Go to Scatterplot', link: '/scatterplot' },
    { text: 'Go to Pie Chart', link: '/piechart' },
    { text: 'Go to Table', link: '/table' },
    { text: 'Go to StackBar', link: '/stackbar' },
    { text: 'Go to Histogram', link: '/histogram' },
    { text: 'Go to HeatMap', link: '/heatmap' },
    { text: 'Go to TreeMap', link: '/treemap' },
    { text: 'Go to PopulationPyramids', link: '/populationpyramids' },
    { text: 'Go to VerticalPyramids', link: '/verticalpyramids' },
  ];
</script>

<main>

	<div class="navbar">
		{#each navigationLinks as { text, link }}
		  <Link to={link} style="color: #fff; margin: 0 15px;font-size: 18px; transition: color 0.3s ease-in-out; text-decoration: none;" class="nav-link">{text}</Link>
		{/each}
	  </div>
	<h1>Data Visualization!</h1>
	<!-- <svg>

	</svg> -->
</main>

<style>
	
	main {
		text-align: center;
		max-width: 100%;
		/* margin: 0 auto; */
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	svg{
		border: 1px solid gray;
		width: 50%;
		height: 30vh;
	}
	.navbar {
    background-color: #9370db; /* Light Purple background */
    padding: 20px;
    text-align: center;
	width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }


</style>