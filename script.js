let data = JSON.parse(localStorage.getItem("grievances")) || [];

document.getElementById("grievanceForm")?.addEventListener("submit", e => {
  e.preventDefault();

  data.push({
    id: data.length + 1,
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
  });

  localStorage.setItem("grievances", JSON.stringify(data));
  window.location.href = "index.html";
});

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
          <button class="btn btn-sm btn-danger" onclick="remove(${i})">Delete</button>
        </td>
      </tr>`;
  });
}

function remove(i) {
  data.splice(i, 1);
  localStorage.setItem("grievances", JSON.stringify(data));
  loadTable();
}

loadTable();
