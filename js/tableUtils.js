window.sortTable = function(columnIndex) {
    const table = document.getElementById('resultsTable');
    const rows = Array.from(table.rows);
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent;
        const bText = b.cells[columnIndex].textContent;
        return aText.localeCompare(bText);
    });
    table.innerHTML = '';
    sortedRows.forEach(row => table.appendChild(row));
}
