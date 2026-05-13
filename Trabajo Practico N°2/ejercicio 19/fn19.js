function agruparPorEspecie() {
    let resultado = document.getElementById("resultado");
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            let personajes = data.results;
            let conteo = personajes.reduce((acc, personaje) => {
                if (!acc[personaje.species]) {
                    acc[personaje.species]=0;
                }
                acc[personaje.species]++;
                return acc;
            }, {});
            resultado.innerHTML = "";
            Object.entries(conteo).forEach(([especie, cantidad]) => {
                resultado.innerHTML += `<p>${especie}: ${cantidad}</p>`;
            });
        });
        }
