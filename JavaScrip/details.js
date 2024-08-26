
import { getDepartmentDetails, getDepartmentCities, getDepartmentNatureAreas } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    let departmentId = new URLSearchParams(window.location.search).get('id');
    let departmentNameElement = document.getElementById('departmentName');
    let departmentDescriptionElement = document.getElementById('departmentDescription');
    let entitiesContainer = document.getElementById('entitiesContainer');
    let searchInput = document.getElementById('searchInput');
    let cityFilter = document.getElementById('cityFilter');
    let natureAreaFilter = document.getElementById('natureAreaFilter');

    let department = await getDepartmentDetails(departmentId);
    let cities = await getDepartmentCities(departmentId);
    let natureAreas = await getDepartmentNatureAreas(departmentId);

    departmentNameElement.textContent = department.name;
    departmentDescriptionElement.textContent = department.description;

    function displayEntities() {
        entitiesContainer.innerHTML = '';
        let entities = [];

        if (cityFilter.checked) {
            entities = entities.concat(cities);
        }
        if (natureAreaFilter.checked) {
            entities = entities.concat(natureAreas);
        }

        let searchText = searchInput.value.toLowerCase();
        let filteredEntities = entities.filter(entity =>
            entity.name.toLowerCase().includes(searchText)
        );

        filteredEntities.forEach(entity => {
            let card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100">
                    <img src="../sources/Colombia.jfif" class="card-img-top" alt="${entity.name}">
                    <div class="card-body">
                        <h5 class="card-title">${entity.name}</h5>
                        <p class="card-text">${entity.description}</p>
                    </div>
                </div>
            `;
            entitiesContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', displayEntities);
    cityFilter.addEventListener('change', displayEntities);
    natureAreaFilter.addEventListener('change', displayEntities);

    displayEntities();
});
