const list = document.getElementById('lista');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response =>response.json())
.then(data => {
    const lists = data.results.filter(p=>p.occupation);
    const nombre = data.results.filter(p=>p.name);
    lists.forEach(element => {
       list.innerHTML+=`<p> ${element.name}-${element.occupation}</p>`; 
    });
})