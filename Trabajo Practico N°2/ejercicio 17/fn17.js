function verificarImagenes() {
    let resultadoDiv = document.getElementById('resultado');
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            let personajes = data.results;
            let todosTienenImagen = personajes.every(personaje => personaje.image!== '');
           if (todosTienenImagen) {
                resultadoDiv.innerHTML = 'Todos los personajes tienen imagen.';
            } else {
                resultadoDiv.innerHTML = 'No todos los personajes tienen imagen.';
            }
        });
}
