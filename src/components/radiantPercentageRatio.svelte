<script>
  import { onMount } from 'svelte';

  let percentage1 = 75; 
  let percentage2 = 20; 
  let percentage3 = 50; 
  let diameter = 200;
  let strokeWidth = 30;
  let radius = (diameter - strokeWidth) / 2;
  let circumference = 2 * Math.PI * radius;
  let offset1 = circumference * (1 - percentage1 / 100);
  let offset2 = circumference * (1 - percentage2 / 100);
  let offset3 = circumference * (1 - percentage3 / 100);

  let dashArray;
  let dashOffset1;
  let dashOffset2;
  let dashOffset3;

  onMount(() => {
    dashArray = `${circumference} ${circumference}`;
    dashOffset1 = `${offset1} ${circumference - offset1}`;
    dashOffset2 = `${offset2} ${circumference - offset2}`;
    dashOffset3 = `${offset3} ${circumference - offset3}`;
  });
</script>

<style>
  .chart {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 5px;
  }
  .circle {
    fill: none;
  }
  .progress {
    fill: none;
    transition: stroke-dasharray 0.5s ease;
    stroke: #ddd; 
  }
  #progress1{
    stroke: #4caf50; 

  }
  #progress2{
    stroke: red; 

  }
  #progress3{
    stroke: purple; 

  }
  .percentage {
    fill: #333; 
    font-size: 24px;
    font-weight: bold;
    text-anchor: middle;
  }
</style>
<main class=" d-flex flex-row-reverse justify-content-">

  <div class="chart">
    <svg viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
      <circle class="circle"  id="progress1" stroke-width={strokeWidth} stroke-dasharray={dashArray} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
      <circle class="progress"  stroke-width={strokeWidth} stroke-dasharray={dashOffset1} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
      <text class="percentage"  dominant-baseline="central" x={diameter / 2} y={diameter / 2}>{percentage1}%</text>
    </svg>
  </div>
  <div class="chart">
    
    <svg viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
      <circle class="circle" id="progress2" stroke-width={strokeWidth} stroke-dasharray={dashArray} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
      <circle class="progress" stroke-width={strokeWidth} stroke-dasharray={dashOffset2} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
      <text class="percentage" dominant-baseline="central" x={diameter / 2} y={diameter / 2}>{percentage2}%</text>
    </svg>
  </div>
  <div class="chart">
    <svg viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
      <circle class="circle"  id="progress3" stroke-width={strokeWidth} stroke-dasharray={dashArray} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
    <circle class="progress" stroke-width={strokeWidth} stroke-dasharray={dashOffset3} cx={diameter / 2} cy={diameter / 2} r={radius}></circle>
    <text class="percentage"  dominant-baseline="central" x={diameter / 2} y={diameter / 2}>{percentage3}%</text>
  </svg>
  
</div>

</main>