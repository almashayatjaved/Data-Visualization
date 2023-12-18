<script>

    export let name;
        let uConnectTeam = [
            {departmentName:"Web Development", faculty:50},
            {departmentName:"UI UX", faculty:25},
            {departmentName:"Degital Marketing", faculty:19},
            {departmentName:"Business Development and Other Staff", faculty:75},
            {departmentName:"USDP", faculty:35},
            {departmentName:"Instrunctional Staff", faculty:35},
    ]
    
    uConnectTeam.sort((a,b)=> b.faculty-a.faculty)
    </script>
    
    <style>
        svg{
            border: 1px solid gray;
            width: 100%;
            height: 500px;
        }
    </style>
    
    <h1>Bar in {name}!</h1>
    
    <svg>
       
            {#each uConnectTeam as department,i}
                <g transform={`translate(300 ${i*50})`}>
                    <rect fill="purple" height="20" width={department.faculty+50}/>
                    <text  text-anchor="end" dominant-baseline="start" y="20" x="-5" >{department.departmentName}</text>
                    <text dominant-baseline="start" y="20" x={department.faculty+52} >{department.faculty} Members</text>
                </g>
            {/each}
    </svg>