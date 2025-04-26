document.getElementById('filterMunicipality').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    rows.forEach(row => {
      const municipality = row.cells[1].textContent.toLowerCase();
      row.style.display = municipality.includes(filter) ? '' : 'none';
    });
  });

const allMunicipalities = ["Praha", "Brno", "Ostrava", "Plzeň", "Olomouc", "Liberec", "Varnsdorf", "Nový Bor", "Cvikov", "Kunratice u Cvikova"];

const selectFilter = document.getElementById('selectFilter');
const municipalitySelect = document.getElementById('municipalitySelect');

selectFilter.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    municipalitySelect.innerHTML = '';
    const filteredMunicipalities = allMunicipalities.filter(municipality => municipality.toLowerCase().includes(filter));
    
    filteredMunicipalities.forEach(municipality => {
      const option = document.createElement('option');
      option.textContent = municipality;
      municipalitySelect.appendChild(option);
    });

    if (filteredMunicipalities.length === 0) {
      const option = document.createElement('option');
      option.textContent = 'Žádné výsledky';
      option.disabled = true;
      municipalitySelect.appendChild(option);
    }
  });

document.getElementById('municipalityForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedMunicipality = municipalitySelect.value;
    const resultDiv = document.getElementById('result');

    if (allMunicipalities.includes(selectedMunicipality)) {
      resultDiv.textContent = `Vybrali jste: ${selectedMunicipality}`;
      console.log("Vybrané město:", selectedMunicipality);
    } else {
      resultDiv.textContent = "Město nenalezeno!";
      console.log("Město nenalezeno!");
    }
  });