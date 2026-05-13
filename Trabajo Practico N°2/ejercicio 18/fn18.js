function buscarPorNombre() {
  let texto = document.getElementById("input").value;
  let resultadoDiv = document.getElementById("resultado");

  fetch("https://rickandmortyapi.com/api/character/?name=" + texto)
  .then(response => response.json())
    .then(data => {
        resultadoDiv.innerHTML = "";
        data.results.forEach(character => {
            resultadoDiv.innerHTML += `
                <div>
                    <img src="${character.image}" width="120">
                    <p>${character.name}</p>
                    <p>${character.status}</p>
                        <hr></hr>
                </div>
            `;
        });
    })
    .catch(error => {
        resultadoDiv.innerHTML = "No se encontraron resultados.";
    });
}
