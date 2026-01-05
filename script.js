let grievances = JSON.parse(localStorage.getItem("grievances")) || [];

document.getElementById("grievanceForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const grievance = {
    id: Date.now(),
    date: date_reported.value,
    community: community.value,
    llg: llg.value,
    complainant: complainant_name.value,
    contact: contact_details.value,
    receiver: receiver.value,
    description: description.value,
    source: source.value,
    severity: severity.value,
    status: status.value
  };

  grievances.push(grievance);
  localStorage.setItem("grievances", JSON.stringify(grievances));
  window.location.href = "index.html";
});

function loadGrievances(){
  const table = document.getElementById("grievanceTable");
  if(!table) return;

  table.innerHTML = "";
  grievances.forEach((g, i) => {
    table.innerHTML += `
      <tr>
        <td>${g.date}</td>
        <td>${g.community}</td>
        <td>${g.llg}</td>
        <td>${g.complainant}</td>
        <td>${g.severity}</td>
        <td>${g.status}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="deleteGrievance(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteGrievance(index){
  grievances.splice(index, 1);
  localStorage.setItem("grievances", JSON.stringify(grievances));
  loadGrievances();
}

loadGrievances();
