function ordenarPorEpisodios() {
    let resultadoDiv = document.getElementById('resultado');
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            let personajes = data.results;
            personajes.sort((a, b) => b.episode.length - a.episode.length);
            resultadoDiv.innerHTML = '';
            personajes.forEach(personaje => {
                resultadoDiv.innerHTML+=`<h2>${personaje.name}</h2><p>Cantidad de episodios: ${personaje.episode.length}</p>`;
            });
        });
}
            
