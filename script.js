/* ===============================
   DEMO DATA (FIRST LOAD ONLY)
================================ */
if (!localStorage.getItem("grievances")) {
  const demoData = [
    {
      date: "2025-08-13",
      receiver: "Sylvester Huafolo",
      channel: "e-mail",
      location: "Mougulu",
      description: "Health patrol officer alleged to be drunk and disorderly.",
      category: "Code of Conduct",
      criticality: "Level 3",
      assigned: "Alex Maha – Director, Health",
      update: "Investigation initiated.",
      status: "Under Review"
    },
    {
      date: "2025-09-02",
      receiver: "Community Liaison Officer",
      channel: "in person",
      location: "Balimo",
      description: "Delayed compensation payments raised by community.",
      category: "Compensation & Payments",
      criticality: "Level 2",
      assigned: "Finance Manager",
      update: "Verification ongoing.",
      status: "Open"
    }
  ];
  localStorage.setItem("grievances", JSON.stringify(demoData));
}

/* ===============================
   LOAD DATA
================================ */
let data = JSON.parse(localStorage.getItem("grievances")) || [];

/* ===============================
   CREATE
================================ */
const form = document.getElementById("grievanceForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const grievance = {
      date: date.value,
      receiver: receiver.value,
      channel: channel.value,
      location: location.value,
      description: description.value,
      category: category.value,
      criticality: criticality.value,
      assigned: assigned.value,
      update: update.value,
      status: status.value
    };

    data.push(grievance);
    localStorage.setItem("grievances", JSON.stringify(data));
    window.location.href = "index.html";
  });
}

/* ===============================
   READ
================================ */
function loadTable() {
  const body = document.getElementById("tableBody");
  if (!body) return;

  body.innerHTML = "";
  data.forEach((g, i) => {
    body.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${g.date}</td>
        <td>${g.receiver}</td>
        <td>${g.channel}</td>
        <td>${g.location}</td>
        <td>${g.category}</td>
        <td>${g.criticality}</td>
        <td>${g.status}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="deleteItem(${i})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

/* ===============================
   DELETE
================================ */
function deleteItem(index) {
  if (!confirm("Delete this record?")) return;
  data.splice(index, 1);
  localStorage.setItem("grievances", JSON.stringify(data));
  loadTable();
}

loadTable();
