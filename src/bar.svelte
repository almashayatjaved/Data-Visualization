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

    </style>
    <Link to="/">Go to Home</Link>
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