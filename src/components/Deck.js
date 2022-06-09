import React, { useEffect, useState } from "react";
import Instance from "../components/Instance";
import { useNavigate } from 'react-router-dom';

const Deck = () => {
    const navigate = useNavigate();
        const [data, setData] = useState([]);
        useEffect(() => {
        Instance
            .get("deck", { headers: {"Authorization" : `Bearer ${localStorage.accesToken}`} })
            .then((res) => setData(res.data))
            .catch((err) => {
                console.error(err);
                navigate("/user/login");
            })
        }, []);
        return (
            <div>
                <h1 className="detail-pages_title">Taille du deck : {data.length} / 6</h1>
                <h2 className="detail-pages_title">Ajoute des cartes</h2>
                <div className="pokemon-case">
                    {data.map((pokemon) => (
                        <div key={pokemon.id} className="pokemons">
                        <a href={`/pokemons/${pokemon.id}`}>
                            <img className="pokemons-img" src={`/img/${pokemon.id}.png`} alt="pokemons img" />
                            <h4 className="h5">#{pokemon.id} {pokemon.name} </h4>
                        </a>
                        <a className="link--removeCard" title="Supprimer du deck" href={`/deck/remove/${pokemon.id}`}>[ - ]</a>
                        </div>
                    ))}
                </div>
            </div>
        );
};

export default Deck;