const estado = document.getElementById("resultado");
fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        const statuts = data.results.filter((p) => p.status === "Alive");
        estado.innerHTML= ` Total de personajes vivos:  ${statuts.length} `;
        statuts.forEach(element => {
            estado.innerHTML += ` >  <p> ${element.name}</p> `;
        });
    });