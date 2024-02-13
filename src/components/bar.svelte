<script>
  import { Link } from "svelte-routing";
  let headingText = "Data Visualization Bar";

  let uConnectTeam = [
    { departmentName: "Department 1", faculty: 50 },
    { departmentName: "Department 2", faculty: 25 },
    { departmentName: "Department 3", faculty: 19 },
    { departmentName: "Department 4", faculty: 100 },
    { departmentName: "Department 5", faculty: 35 },
    { departmentName: "Department 6", faculty: 220 },
    { departmentName: "Department", faculty: 290 },
    { departmentName: "Department 8", faculty: 220 },
    { departmentName: "Department 9", faculty: 200 },
    { departmentName: "Department 10", faculty: 125 },
    { departmentName: "Department 11", faculty: 209 },
    { departmentName: "Department 13", faculty: 329 },
    { departmentName: "Department 14", faculty: 150 },
  ];

  uConnectTeam.sort((a, b) => b.faculty - a.faculty);
</script>

  <div>
    <svg>
      {#each uConnectTeam as department, i}
        <g transform={`translate(150 ${i * 25})`}>
          <rect fill="#afd1eb" height="20" width={department.faculty + 50} />
          <text text-anchor="end" dominant-baseline="start" style="fill: #28267d;" y="20" x="-15"
            >{department.departmentName}</text
          >
          <text dominant-baseline="start" y="20" style="fill: #28267d;" x={department.faculty + 60}
            >{department.faculty}</text
          >
        </g>
      {/each}
    </svg>
  </div>

<style>
  svg {
    width: 100%;
    height: 340px;
  }

</style>