async function pokeApi() {
  try{
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const details = await data.json();
  const num=50;
  for (let m = 0; m < num; m++) {
    let pok = details.results[m].name;
    createProfile(pok);
  }
}catch{
  console.log(error);
}
}
async function createProfile(details) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${details}`);
  const pokemon = await data.json();
  const info = document.createElement("div");
  info.className = "container";

  // const color=colors[Ability];
  // info.style.backgroundColor = color;
  info.innerHTML = `
  <div class="pic">
      <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png">
  </div>
  <div class="text">
      <p><strong>Name: </strong>${pokemon.name}</p>
      <p><strong>Weight: </strong>${pokemon.weight}</p>
      <p><strong>Ability: </strong>${pokemon.abilities[0].ability.name}</p>
      <p><strong>Moves: </strong>${pokemon.moves[0].move.name}</p>
  </div>
  `;
  console.log(pokemon.id);
  document.body.append(info);
      
    }
    pokeApi();