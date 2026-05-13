function buscarPersonajePorID() {
    const idInput = document.getElementById('idInput');
    const id = idInput.value.trim();
    const resultadoDiv = document.getElementById('resultado');
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.image}" alt="${data.name}">
                <p>Especie: ${data.species}</p>
                <p>Estado: ${data.status}</p>
            `;
        })
        .catch(error => {
            resultado.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
document.getElementById('buscarBtn').addEventListener('click', buscarPersonajePorID);
