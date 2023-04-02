
const API_URL1='https://pokeapi.co/api/v2/pokemon'


console.log(API_URL1)

async function getPokemonData() {
  try {
    const response = await fetch(API_URL1);
    if (!response.ok) {
      console.log("error")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}



getPokemonData()
  .then(data => {
    console.log(data)
    const pokemonList = data.results;
    const pokemonContainer = document.getElementById('pokemon-container');
      pokemonList.forEach(pokemon => {
      const pokemonElement = document.createElement('div');
      //pokemonElement.className="card";
      pokemonElement.classList.add('card');
      //pokemonElement.innerHTML += '<h2>${pokemon.Name} </h2>'
      const pokemonName = document.createElement('h1');
      pokemonName.innerText = pokemon.name;
      pokemonName.style.justifyContent="center"
      //const pokemonName = document.createElement('h2');
     // pokemonName.innerText = pokemon.name;
      //pokemonElement.appendChild(pokemonName);
      pokemonElement.appendChild(pokemonName);
      console.log(pokemon.url)

      fetch(pokemon.url)
            .then(response => response.json())
      .then(pokemonData => {
        console.log(pokemonData)
 
        const abilities = pokemonData.abilities;
        const moves = pokemonData.moves;
        const weight = pokemonData.weight;
        const t1=document.createElement('h3')
        t1.style.color='red'
        t1.innerText="Abilities:"
        const abilityList = document.createElement('h5');
        abilityList.appendChild(t1);
        abilities.forEach(ability => {
          const abilityItem = document.createElement('h5');
          abilityItem.innerText = ability.ability.name;
          abilityItem.style.textAlign='left'
          abilityList.appendChild(abilityItem);
        });
        const t2=document.createElement('h3')
        t2.style.color='green'
        t2.innerText="Moves:"
        abilityList.appendChild(t2);
        moves.forEach(move=> {
          const moveItem = document.createElement('h5');
          moveItem.innerText = move.move.name;
          abilityList.appendChild(moveItem);
        });
         const weightadd = document.createElement('h5');
        weightadd.innerText = weight;
        const t3=document.createElement('h3')
        t3.innerText="weight:"
        t3.style.color='blue'
        abilityList.appendChild(t3);
        abilityList.appendChild(weightadd);
        pokemonElement.appendChild(abilityList);
      });
   
     pokemonContainer.appendChild(pokemonElement);
    });
  })
  .catch(error => console.error(error));
 // HTML element to display the images
