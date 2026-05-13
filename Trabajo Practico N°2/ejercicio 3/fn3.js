const gen = document.getElementById('genero')
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
    const mujeres = data.results.filter(p => p.gender === 'famale');
    gen.innerHTML = `total de mujeres: ${mujeres.lenght}`;
    mujeres.forEach(element => {
        gen.innerHTML += `> <p> ${element.name}</p>`;
    });
})