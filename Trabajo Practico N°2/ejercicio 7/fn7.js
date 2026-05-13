fetch("https://thesimpsonsapi.com/api/characters")
.then(response=>response.json())
.then(data => {
    personaje = data.results;
    console.log(personaje);
});

    document.getElementById("verificar").addEventListener("click",function(){
        const ocupacion = document.getElementById("ocupacion").value.toLowerCase();
        const existe = personaje.some(p => p.occupation && p.occupation.toLowerCase() === ocupacion);

        if(existe){
            document.getElementById("resultado").innerHTML= "La ocupación existe.";
        } else {
            document.getElementById("resultado").innerHTML= "La ocupación no existe.";
        }
    });
    






