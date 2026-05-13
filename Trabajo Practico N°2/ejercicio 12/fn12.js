const nombre = document.getElementById("resultado");
fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        const characters = data.results.slice(0, 5);
        characters.forEach(character => {
            const div = document.createElement("div");
            div.innerHTML = `<h2>${character.name}</h2><p>Estado: ${character.status}</p>`;
            nombre.appendChild(div);
        });
    });
    