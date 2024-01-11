<script>
  import { Router, Route } from "svelte-routing";
  import SVG from "./svg.svelte";
  import Bar from "./components/bar.svelte";
  import Scatterplot from "./components/scatterplot.svelte";
  import Table from "./components/table.svelte";
  import Pie from "./components/piechart.svelte";
  import StackBar from "./components/stackbar.svelte";
  import Histogram from "./components/histogram.svelte";
  import Heatmap from "./components//heatmap.svelte";
  import TreeMap from "./components/treemap.svelte";
  import Populationpyramids from "./components//populationpyramids.svelte";
  import Verticalpyramids from "./components/verticalpyramids.svelte";
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
  <Route path="/treemap" component={TreeMap} />
  <Route path="/populationpyramids" component={Populationpyramids} />
  <Route path="/verticalpyramids" component={Verticalpyramids} />
</Router>
