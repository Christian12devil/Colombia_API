
import { getInvasiveSpecies } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    let speciesTableBody = document.querySelector('#speciesTable tbody');
    let species = await getInvasiveSpecies();

    species.forEach(species => {
        let row = document.createElement('tr');
        
        if (species.riskLevel === "1") {
            row.classList.add('risk-level-1');
        } else if (species.riskLevel === "2") {
            row.classList.add('risk-level-2');
        }

        let imageUrl = species.image ? species.image : '../sources/animal.png';

        row.innerHTML = `
            <td>${species.name}</td>
            <td>${species.scientificName}</td>
            <td>${species.impact}</td>
            <td>${species.management}</td>
            <td>${species.riskLevel}</td>
            <td><img src="${imageUrl}" alt="${species.name}" class="img-fluid" style="max-width: 100px;"></td>
        `;
        speciesTableBody.appendChild(row);
    });
});
