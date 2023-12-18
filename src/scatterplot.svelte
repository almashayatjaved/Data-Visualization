<script>
import { Link } from "svelte-routing"
import {scaleLinear} from "d3-scale"
import { extent } from "d3-array";

const width = 600;
const height = 600;

    async function LOADINGDATA (){

        let datahere = [
    {
        "breakfastCode": 5.1,
        "lunchCode": 3.5,
        "kitchenCode": 1.4,
        "wardCode": 0.2,
        "case": "Hapetitis"
    },
    {
        "breakfastCode": 4.9,
        "lunchCode": 3.0,
        "kitchenCode": 1.4,
        "wardCode": 0.2,
        "case": "Hapetitis"
    }
]
        let data = await fetch('/data/patient.json')
        let json = (await data.json());

        let xExtent = extent(json, (d)=>d.breakfastCode)
        let yExtent = extent(json, (d)=>d.lunchCode)

        let xScale = scaleLinear().domain(xExtent).range([10, width-10])
        let yScale = scaleLinear().domain(yExtent).range([height-10, 10])

        return {
            json,
            xScale,
            yScale
        }

    }

    let data = LOADINGDATA()
</script>

{#await data}
<p>loading....</p>
{:then iris}
<Link to="/">Go to Home</Link>
<p>Loaded :) {iris.json.length}</p>


<svg {height} {width}>
    {#each iris.json as item}
        <circle r="3" cx={iris.xScale(item.breakfastCode)} cy={iris.yScale(item.lunchCode)} fill="red"/>
    {/each}
</svg>

{/await}