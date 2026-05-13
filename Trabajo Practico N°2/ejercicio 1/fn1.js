const elemento = document.getElementById('resultado');{
    fetch ('https://thesimpsonsapi.com/api/characters')
    .then (response=>response.json())
    .then (data => elemento.innerHTML = '>' + data.results[0].name);
}