
function BattleFight() {
    const pokemonCase = document.querySelector(".pokemon-case--battle");
    const pokemon1 = pokemonCase.firstChild;
    const powerOfPokemon1 = pokemon1.textContent.split(" ");
    const pokemon2 = pokemonCase.lastChild;
    const powerOfPokemon2 = pokemon2.textContent.split(" ");
    const fihgter1Name = powerOfPokemon1[1];
    const fighter1 = Number(powerOfPokemon1[7]);
    const fihgter2Name = powerOfPokemon2[1];
    const fighter2 = Number(powerOfPokemon2[7]);
    if (fighter1 > fighter2) {
        // const winner1 = document.createElement("h2");
        const winner = document.getElementById("winner");
        winner.innerText = `${fihgter1Name} WINNER`;
        // winner.appendChild(winner1);
    }
    else {
        // const winner2 = document.createElement("h2");
        const winner = document.getElementById("winner");
        winner.innerText = `${fihgter2Name} WINNER`;
        // winner.appendChild(winner2);
    }

};

export default BattleFight;