const nom = document.getElementById('nombres')
fetch('https://thesimpsonsapi.com/api/characters')
.then (response => response.json())
.then (data => {
    data.results.slice(0,5).forEach(element => {
        nom.innerHTML += `> <p> ${element.name} <p>`
    });
})
