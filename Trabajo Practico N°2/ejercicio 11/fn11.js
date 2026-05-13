fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    const primero = data.results[0];
    console.log(primero);
    document.getElementById("resultado").innerHTML = `<p>El primer personaje es :  ${primero.name}</p>`;
  });