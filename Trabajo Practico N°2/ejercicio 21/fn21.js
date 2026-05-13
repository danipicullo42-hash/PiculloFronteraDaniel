function cargar() {
  let resultado = document.getElementById("resultado");

  Promise.all([
    fetch("https://thesimpsonsapi.com/api/characters").then(res1 => res1.json()),
    fetch("https://rickandmortyapi.com/api/character").then(res => res.json())
  ])
  .then(([simpsons, rm]) => {

    let listaSimpsons = Object.values(simpsons);
    let listaRM = rm.results;

    let s = listaSimpsons[Math.floor(Math.random() * listaSimpsons.length)];
    let r = listaRM[Math.floor(Math.random() * listaRM.length)];

    resultado.innerHTML = `
      <div style="display:flex; gap:50px;">

        <div>
          <h3>Simpsons</h3>
          <img src="${s.portrait_path}" width="250">
          <p>${s.name}</p>
          <p>${s.gender}</p>
          <p>${s.occupation}</p>
        </div>

        <div>
          <h3>Rick & Morty</h3>
          <img src="${r.image}" width="250">
          <p>${r.name}</p>
          <p>${r.gender}</p>
          <p>${r.status}</p>
        </div>

      </div>

      <hr>

      <p>
        Edad Simpsons: ${s.age} vs Episodios RM: ${r.episode.length}
      </p>
    `;
  });
}