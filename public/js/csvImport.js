document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            parseCSV(contents);
        };
        reader.readAsText(file);
    }
}

function parseCSV(data) {
    const lines = data.split('\n');
    const tableBody = document.querySelector('#expensesTable tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split('\t'); // Assuming tab-separated values
        if (row.length === 3) {
            const newRow = document.createElement('tr');
            for (let j = 0; j < row.length; j++) {
                const cell = document.createElement('td');
                cell.textContent = row[j];
                cell.className = 'py-2 px-4 border-t border-gray-700';
                newRow.appendChild(cell);
            }
            tableBody.appendChild(newRow);
        }
    }
}
