<script>
	export let name;
</script>

<main>
	<h1>SVG in {name}!</h1>
	<svg>

	</svg>
</main>

<style>
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	svg{
		border: 1px solid gray;
		width: 50%;
		height: 30vh;
	}
</style>