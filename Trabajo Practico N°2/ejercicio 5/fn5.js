const edad = document.getElementById('edad');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
    const edad = data.results.filter(p=>p.age)
    const nombre = data.results.filter(p=>p.name);
});