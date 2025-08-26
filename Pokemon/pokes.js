// Fetch pokemon
async function fetchPokes()
{
    let num = Math.floor(Math.random()*50)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${num}`);
    const pokeData = await res.json();
    loopPokes(pokeData);
}

// Generate a list of pokes
function loopPokes(pokes)
{
    for(pokemon of pokes.results)
    {
        const poke = document.createElement("li");
        poke.className = "btn";
        poke.innerHTML = pokemon.name;
        poke.url = pokemon.url; // Give the poke div a property to hold the url and set it to the pokemon url
        document.querySelector(".list").appendChild(poke);
        poke.addEventListener("click", getMyPokemon);
    }
}

// Getting pokemon
async function getMyPokemon(e)
{
    const res = await fetch(e.target.url);  // The target is the list item with the click event in the loopPokes function
    const pokeData = await res.json();
    const panel = document.querySelector(".panel");
    panel.innerHTML = `<h2>${pokeData.name}<h2>
        <img src="${pokeData.sprites.other["official-artwork"].front_default}" alt="${pokeData.name}">
        <h3>Abilities:</h3>`
    const abilities = document.createElement("ul");
    panel.appendChild(abilities);
    for(ability of pokeData.abilities)
    {
        const item = document.createElement("li");
        item.innerHTML = ability.ability.name; // Each item in the abilities array has an object called ability
        abilities.appendChild(item);
    }
}
fetchPokes();