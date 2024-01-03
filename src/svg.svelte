<script>
	import 'bootstrap/dist/css/bootstrap.min.css';

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

<main class="text-center">

	<div class="navbar bg-[#1a9496] border rounded " style="height: 10vh;">
		{#each navigationLinks as { text, link }}
		  <Link to={link} class="text-light nav-link" style="font-weight:bold; margin: 0 15px;font-size: 18px; transition: color 0.3s ease-in-out; text-decoration: none;">{text}</Link>
		{/each}
	  </div>
	<div style="height: 75vh; background-color:#20354c" class="witw-100 d-flex">
		<div class=" w-50 d-flex flex-column align-items-center justify-content-center">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src="/images/23.jpg" class=" rounded-circle" style="height: 60%; width: 45%" alt="my image">
		</div>
		<div class="w-50 d-flex text-light  flex-column align-items-center justify-content-center">
			<h1 class="font-sans-serif text-light fs-3" style="font-weight:bold">Meet Almas Javed</h1>
			<p>Data Visualization Developer</p>
		</div>
	</div>
	<footer class="border" style="height: 13vh;">
		<div>Explore My work and Contact me</div>
		<div>
			
		</div>
	</footer>

 
	<!-- <svg>

	</svg> -->
</main>

<style>
	
	main {
		/* text-align: center; */
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
    background-color: #1a9496; /* Light Purple background */
    padding: 20px;
    text-align: center;
	width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }


</style>