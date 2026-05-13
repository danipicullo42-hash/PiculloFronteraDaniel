let personajes = [];

fetch("https://thesimpsonsapi.com/api/characters")
  .then(response => response.json())
  .then(data => {
    personajes = data.results;
    console.log(personajes);
    });

    // Recién acá agregamos el evento al botón
    document.getElementById("buscarBtn").addEventListener("click", function() {
      const nombreBuscado = document.getElementById("nombreInput").value.toLowerCase();
      const personaje = personajes.find(p => p.name.toLowerCase() === nombreBuscado);

      if (personaje) {
        document.getElementById("resultado").innerHTML =
          `Nombre: ${personaje.name}<br>
           Ocupación: ${personaje.occupation || "Desconocida"}<br>
           Edad: ${personaje.age || "No especificada"} años`;
      } else {
        document.getElementById("resultado").innerHTML = "Personaje no encontrado";
      }
    });

 









