
fetch("https://thesimpsonsapi.com/api/characters")
  .then(response => response.json())
  .then(data => {
    personajes = data.results;
    const genero = personajes.reduce((acc, personaje) => {
        const conteo = personaje.gender || "Desconocido";
        if (!acc[conteo]){
            acc[conteo]=0;
        }
        acc[conteo]++;
        return acc;
    }, {});
    let resultado =`👨 masculino :${genero["Male"] || 0}\n
        👩femenino : ${genero["Female"]|| 0}\n
        desconocido: ${genero["Desconocido"] || 0}`;

    document.getElementById("resultado").innerHTML = resultado
  });
