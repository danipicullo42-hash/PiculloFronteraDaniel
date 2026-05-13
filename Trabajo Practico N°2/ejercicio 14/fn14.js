fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        const especiesHumanas = data.results.filter((p) => p.species === "Human");
        document.getElementById("resultado").innerHTML = `Total de personajes humanos: ${especiesHumanas.length}`;
        especiesHumanas.forEach(element => {
            document.getElementById("resultado").innerHTML += ` >  <p> ${element.name}</p> `;
        });
    });
