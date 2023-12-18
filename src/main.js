// import App from './svg.svelte';
// import App from './bar.svelte';
// import App from './scatterplot.svelte';
// import App from './table.svelte';
import App from './piechart.svelte';
// import App from './stackbar.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svg'
	}
});

export default app;