import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetAllPokemonForOnType = () => {
  try {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [dataPokemon, setDataType] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:9999/types/${id}`).then((res) => {
        setData(res.data);
        setDataType(res.data.pokemons);
      });
    }, []);
    return (
      <div>
        <h1 className="h4 liste-types_title">
          Page des Pokémons du type {data.name}
        </h1>
        <div className="pokemon-case">
          {dataPokemon.map((pokemon) => (
            <div key={`${pokemon.id}`} className="pokemons">
              <a href={`/pokemons/${pokemon.id}`}>
                <img
                  className="pokemons-img"
                  src={`/img/${pokemon.id}.png`}
                  alt={`img ${pokemon.name}`}
                />
                <h4 className="h5">
                  #{pokemon.id} {pokemon.name}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};

export default GetAllPokemonForOnType;
