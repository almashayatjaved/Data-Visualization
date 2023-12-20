
<script>
    import { Router, Route } from 'svelte-routing';
    import SVG from './svg.svelte';
    import Bar from './bar.svelte';
	import Scatterplot from './scatterplot.svelte';
	import Table from './table.svelte';
	import Pie from './piechart.svelte';
	import StackBar from './stackbar.svelte';
	import Histogram from './histogram.svelte';
    import Heatmap from './heatmap.svelte';
    import TreeMap from './treemap.svelte';
  import Treemap from './treemap.svelte';
  </script>
  
  <Router>
    <Route path="/" component={SVG} />
    <Route path="/bar" component={Bar} />
    <Route path="/scatterplot" component={Scatterplot} />
    <Route path="/table" component={Table} />
    <Route path="/piechart" component={Pie} />
    <Route path="/stackbar" component={StackBar} />
    <Route path="/histogram" component={Histogram} />
    <Route path="/heatmap" component={Heatmap} />
    <Route path="/treemap" component={Treemap} />
  </Router>
  