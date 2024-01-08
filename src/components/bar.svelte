<script>
  import { Link } from "svelte-routing";
  let headingText = "Data Visualization Bar";

  let uConnectTeam = [
    { departmentName: "Department 1", faculty: 50 },
    { departmentName: "Department 2", faculty: 25 },
    { departmentName: "Department 3", faculty: 19 },
    { departmentName: "Department 4", faculty: 100 },
    { departmentName: "Department 5", faculty: 35 },
    { departmentName: "Department 6", faculty: 450 },
    { departmentName: "Department 7", faculty: 500 },
    { departmentName: "Department", faculty: 290 },
    { departmentName: "Department 8", faculty: 350 },
    { departmentName: "Department 9", faculty: 400 },
    { departmentName: "Department 10", faculty: 125 },
    { departmentName: "Department 11", faculty: 409 },
    { departmentName: "Department 12", faculty: 700 },
    { departmentName: "Department 13", faculty: 379 },
    { departmentName: "Department 14", faculty: 150 },
  ];

  uConnectTeam.sort((a, b) => b.faculty - a.faculty);
</script>

<div class="navbar bg-[#1a9496] border rounded" style="height: 10vh;">
  <button
    type="button"
    class="btn btn-primary rounded-5 btn-lg mx-20 me-5 ms-5 p-2 border-0"
    ><a class="text-light text-decoration-none" href="/">Home</a></button
  >
</div>
<main>
  <h1
    style="color: #e9deff; /* Light Purple color */ text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); padding:20px "
  >
    {headingText}
  </h1>

  <div style="height:90vh">
    <svg>
      {#each uConnectTeam as department, i}
        <g transform={`translate(300 ${i * 25})`}>
          <rect fill="#afd1eb" height="20" width={department.faculty + 50} />
          <text text-anchor="end" dominant-baseline="start" style="fill: white;" y="20" x="-15"
            >{department.departmentName}</text
          >
          <text dominant-baseline="start" y="20" style="fill: white;" x={department.faculty + 60}
            >{department.faculty} Members</text
          >
        </g>
      {/each}
    </svg>
  </div>
</main>

<style>
  svg {
    width: 100%;
    height: 500px;
  }
  h1 {
    text-align: center;
    font-weight: bold;
    color: #9370db; /* Light Purple color */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow effect */
  }
  main {
    background-color: #20354c; /* Light Purple background */
    height: 90vh;
  }
  .navbar {
    background-color: #1a9496; /* Light Purple background */
  }
  button {
    /* padding: 10px; */
    /* margin-inline: 50px; */
    background-color: #20364c;
  }
</style>
