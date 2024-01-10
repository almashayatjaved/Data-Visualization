<script>
  import { Link } from "svelte-routing";
  // Assuming you have an array of faculty objects
  let facultyList = [
    {
      name: "John Doe",
      designation: "Professor",
      department: "Computer Science",
    },
    {
      name: "George Smith",
      designation: "Associate Professor",
      department: "Information Technology",
    },
    {
      name: "Lara",
      designation: "Associate Professor",
      department: "Application Development",
    },
    {
      name: "Taylor",
      designation: "Associate Lecturer",
      department: "Application Management",
    },
    {
      name: "Shawn",
      designation: "Lecturer",
      department: "Business Intelligence (BI)",
    },
    {
      name: "Ariana",
      designation: " Lecturer",
      department: "IT Management & Administration",
    },
    { name: "Aina", designation: "Lecturer", department: "IT Procurement" },
    { name: "Batt", designation: "Professor", department: "IT Security" },
    {
      name: "Tim",
      designation: "Professor",
      department: "Network Adminstration",
    },
    // Add more faculty objects as needed
  ];
</script>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Designation</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      {#each facultyList as faculty (faculty.name)}
        <tr>
          <td>{faculty.name}</td>
          <td>{faculty.designation}</td>
          <td>{faculty.department}</td>
        </tr>
      {/each}
    </tbody>
  </table>

<style>
  /* Add your styling here */
  table {
    /* border-collapse: collapse; */
    width: 100%;
    border: none;
    --bs-card-bg:none
  }

  th,
  td {
    border: 1px solid #06133d36;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #536f8c;
  }
  tbody {
    background-color: #5a5d67;
    color: #759fd4;
  }
</style>
