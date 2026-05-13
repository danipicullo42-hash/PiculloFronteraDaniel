let personajes = [];

fetch("https://thesimpsonsapi.com/api/characters")
  .then(response => response.json())
  .then(data => {
    personajes = data.results;

    
    const primerosOcho = personajes.slice(0, 8);

    let galeria = "";
		const baseURL = "https://thesimpsonsapi.com/";
    
    primerosOcho.forEach(p => {
  galeria += `
    <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block; width: 180px; text-align: center;">
      <img src="${p.portrait_path ? 'https://cdn.thesimpsonsapi.com/200' + p.portrait_path : 'https://via.placeholder.com/100'}" alt="${p.name}" style="width: 100px; height: auto;"><br>
      <strong>${p.name}</strong><br>
      Ocupación: ${p.occupation || "Desconocida"}<br>
      Edad: ${p.age || "No especificada"} años
    </div>
  `;
});
    document.getElementById("galeria").innerHTML = galeria;
    });

    

