import { getDepartments } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  let departmentsContainer = document.getElementById("departmentsContainer");
  let searchInput = document.getElementById("searchInput");
  getDepartments().then((departments) => {
    displayDepartments(departments, departmentsContainer);
    searchInput.addEventListener("input", (event) => {
      let searchText = event.target.value.toLowerCase();
      let filteredDepartments = departments.filter((department) =>
        department.name.toLowerCase().includes(searchText)
      );
      displayDepartments(filteredDepartments, departmentsContainer);
    });
  });
});

function displayDepartments(departments, container) {
  container.innerHTML = "";
  departments.forEach((department) => {
    let card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
            <div class="card h-100">
                <img src="../sources/Colombia.jfif" class="card-img-top" alt="${department.name}">
                <div class="card-body">
                    <h5 class="card-title">${department.name}</h5>
                    <p class="card-text">${department.description}</p>
                    <a href="details.html?id=${department.id}" class="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        `;
    container.appendChild(card);
  });
}
