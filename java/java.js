let contenedor = document.getElementById("container");
let personajes = {};

const traer_datos = (id)=>{
    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then((response) => response.json())
    .then((data) => {
        personajes = data;
        print();

    })
    .catch((error) => console.log(error))
}

const print = ()=>{
    contenedor.innerHTML = "";
    contenedor.insertAdjacentHTML('beforeend',`
    
    <div class="datos">
        <img class="personaje" src="${personajes.image}">
        <center><h1>${personajes.name}</h1></center>
    </div>
    `)
    contenedor.insertAdjacentHTML('beforeend', `
      <div class ="informacion">
      <center><h4>species: ${personajes.species}</h4></center>
      <center><h4>gender: ${personajes.gender}</h4></center>
      <center><h4>dimension: ${personajes.dimension}</h4></center>
      <center><h4>status: ${personajes.status}</h4></center>
      </div>
      `)
      contenedor.insertAdjacentHTML('beforeend', `
      <button id="random">Aletorio</button>
    `)
    let rand_btn = document.getElementById("random")
    rand_btn.addEventListener("click", ()=>{
        traer_datos(aleatorio_entre(1,826));
    })
}

const aleatorio_entre = (min,max)=>{
    return Math.ceil(Math.random()*(max-min)+min);
}

traer_datos(1);