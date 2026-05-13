function dashboard() {
    let resultado = document.getElementById("resultado");
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            let characters = data.results;

            let total = characters.length;

            let vivos = characters.filter(p => p.status === "Alive").length;
            let muertos = characters.filter(p => p.status === "Dead").length;
            let desconocidos = characters.filter(p => p.status === "unknown").length;

            let ordenados = [...characters].sort((a, b) => b.episode.length - a.episode.length);

            let max = ordenados[0];
            let min = ordenados[ordenados.length - 1];

            let especies = [...new Set(characters.map(p => p.species))];

            resultado.innerHTML = `
                <p>Total de personajes: ${total}</p>
                <p>Vivos: ${vivos}</p>
                <p>Muertos: ${muertos}</p>
                <p>Desconocidos: ${desconocidos}</p>
                <p>Personaje con más episodios: ${max.name} (${max.episode.length} episodios)</p>
                <p>Personaje con menos episodios: ${min.name} (${min.episode.length} episodios)</p>
                <p>Especies: ${especies.join(", ")}</p>
            `;
        });
}