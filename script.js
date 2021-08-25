let i=0,j=5,page_no=0;
const info = document.createElement("div");
info.className = "container_outer";

async function pokeApi() {
  try{
    console.log(i,j)
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const details = await data.json();
  const num=50;
  while(i<j){
    let pok = details.results[i].name;
    createProfile(pok);
    i++;
  }
  // let store = window.localStorage.setItem("value",i);
  console.log(i)
}catch{
  console.log(error);
}
}
async function createProfile(details) {
  try{
    info.innerHTML = ``;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${details}`);
  const pokemon = await data.json();

  // const color=colors[Ability];
  // info.style.backgroundColor = color;
  info.innerHTML += `
  <div class="container">
  <div class="pic">
  <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png">
</div>
<div class="text">
  <p><strong>Name: </strong>${pokemon.name}</p>
  <p><strong>Weight: </strong>${pokemon.weight}</p>
  <p><strong>Ability: </strong>${pokemon.abilities[0].ability.name}</p>
  <p><strong>Moves: </strong>${pokemon.moves[0].move.name}</p>
</div>
  </div>
  `;
  // console.log(pokemon.id);
  document.body.append(info);
  }
  catch{
    console.log(error);
  }    
    }
    pokeApi();

  const zap = document.createElement('div');
  zap.className = "btn";
  zap.innerHTML = `
  <button class="btn1" onclick="previous()">Previous</button>
  <button class="btn2" onclick="next()">Next</button>
  `;
  document.body.append(zap);

  function previous(){
    // i=Number(window.localStorage.getItem("value"));
    if(page_no>4){
      i=page_no;
      console.log("hi")
      page_no=page_no-5;  
      // j=j-5;
      j=i+5;
      // console.log(i,j);
      pokeApi();
  }
 }
function next(){
  // i=Number(window.localStorage.getItem("value"));
  // j=i+5;
  if(page_no<50){
    i=page_no;
    page_no=page_no+5;
    j=i+5;
    pokeApi();
 }
}

  


    // i=0 & j=5 
    // while loop 
    // 