document.getElementById('add-btn').addEventListener('click', function () {
    // Obtener los valores de los inputs
    const date = document.getElementById('date-input').value.trim();
    const description = document.getElementById('description-input').value.trim();
    const cost = document.getElementById('cost-input').value.trim();

    // Validar que no estén vacíos
    if (!date || !description || !cost) {
        alert('Please fill in all fields.');
        return;
    }

    // Crear una nueva fila para la tabla
    const dataBody = document.getElementById('data-body');
    const newRow = `<tr>
                        <td>${date}</td>
                        <td>${description}</td>
                        <td>$${parseFloat(cost).toFixed(2)}</td>
                    </tr>`;

    // Añadir la nueva fila a la tabla
    dataBody.innerHTML += newRow;

    // Limpiar los inputs
    document.getElementById('date-input').value = '';
    document.getElementById('description-input').value = '';
    document.getElementById('cost-input').value = '';
});