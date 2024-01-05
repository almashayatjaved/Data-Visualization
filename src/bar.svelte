<script>
    import { Link } from 'svelte-routing'
      let headingText = 'Data Visualization Bar';

        let uConnectTeam = [
            {departmentName:"Web Development", faculty:50},
            {departmentName:"UI UX", faculty:25},
            {departmentName:"Degital Marketing", faculty:19},
            {departmentName:"Business Development and Other Staff", faculty:100},
            {departmentName:"USDP", faculty:35},
            {departmentName:"Instrunctional Staff", faculty:35},
    ]
    
    uConnectTeam.sort((a,b)=> b.faculty-a.faculty)
    </script>
    
    <style>
        svg{
            width: 100%;
            height: 500px;
        }
        h1 {
        text-align: center;
        font-weight: bold;
        color: #9370db; /* Light Purple color */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow effect */
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
    <h1 style="color: #9370db; /* Light Purple color */ text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow effect */">
        {headingText}
      </h1>
    
    <svg>
       
            {#each uConnectTeam as department,i}
                <g transform={`translate(300 ${i*50})`}>
                    <rect fill="purple" height="20" width={department.faculty+50}/>
                    <text  text-anchor="end" dominant-baseline="start" y="20" x="-5" >{department.departmentName}</text>
                    <text dominant-baseline="start" y="20" x={department.faculty+52} >{department.faculty} Members</text>
                </g>
            {/each}
    </svg>
</main>