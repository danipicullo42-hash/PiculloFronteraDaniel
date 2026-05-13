let personajes = [];
fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        personajes = data.results;
        console.log(personajes);
    
    const ordenados = personajes.sort((a, b) => a.age -b.age);
    const once = ordenados.slice(11);
    const cinco = once.slice(0,5);
    
     cinco.forEach(p => console.log(p.name));

     let resultado = '';
     cinco.forEach(p=> {
        resultado+=` nombre: ${p.name} - edad:${p.age || 'no especificada'} años\n`;
     });
     document.getElementById("resultado").innerText = resultado;
});
