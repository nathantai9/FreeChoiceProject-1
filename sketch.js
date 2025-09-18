"use scrict";

document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const piece = document.getElementById('piece').value;
    const duration = document.getElementById('duration').value;
    const goalsBefore = document.getElementById('goalsBefore').value;
    const goalsAfter = document.getElementById('goalsAfter').value;

    const logsContainer = document.getElementById('logsContainer');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${piece}</td>
        <td>${duration}</td>
        <td>${goalsBefore}</td>
        <td>${goalsAfter}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;
    logsContainer.appendChild(row);

    this.reset();
});