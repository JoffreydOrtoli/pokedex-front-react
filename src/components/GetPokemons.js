import React, { useEffect, useState } from "react";
import Instance from "../components/Instance";

const GetAllPokemons = () => {
  try {
    const [data, setData] = useState([]);
    useEffect(() => {
      Instance
        .get("pokemons")
        .then((res) => setData(res.data));
    }, []);
    return (
      <div className="pokemon-case">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="pokemons">
            <a href={`/pokemons/${pokemon.id}`}>
              <img className="pokemons-img" src={`./img/${pokemon.id}.png`} alt={`pokemons ${pokemon.name}`} />
              <h4 className="h5">#{pokemon.id} {pokemon.name}</h4>
            </a>
            {localStorage.accesToken ? (
              <>
                <a title="Ajouter au deck" href={`/deck/add/${pokemon.id}`}>[ + ]</a>
                <a title="Supprimer du deck" href={`/deck/remove/${pokemon.id}`}>[ - ]</a>
              </>
            ): (<></>)}
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};

export default GetAllPokemons;