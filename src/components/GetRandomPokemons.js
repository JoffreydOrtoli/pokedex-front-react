import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import BattleFight from "../components/BattleFight";
import Instance from "../components/Instance";

const GetRandomPokemons = () => {
    const navigate = useNavigate();
        const [data, setData] = useState([]);
        useEffect(() => {
          Instance
            .get("battle/fight", { headers: {"Authorization" : `Bearer ${localStorage.accesToken}`} })
            .then((res) => setData(res.data))
            .catch((err) => {
                console.error(err);
                navigate("/user/login");
            })
        }, []);
        
        const winner = [];
        for (const data of data) {
            winner.push(data.name); 
        }

        return (
            <div>
                <Header />
                <h1 className="battle-title">Arène VS</h1>
                <div id="winner-div">
                    <a href="/battle/fight" className="shuffleBattle">Mélanger</a>
                    <button onClick={BattleFight} className="shuffleBattle">FIGHT</button>
                </div>
                <div id="winner">{winner[0]} VS {winner[1]}</div>
                <div className="pokemon-case pokemon-case--battle">
                    {data.map((pokemon) => (
                        <div key={pokemon.id}>
                            <div className="pokemons">
                                <a href={`/pokemons/${pokemon.id}`}>
                                    <img className="pokemons-img" src={`/img/${pokemon.id}.png`} alt="pokemons img" />
                                    <h4 className="h5">#{pokemon.id} {pokemon.name} </h4>
                                </a>
                            </div>
                            <p className="pokemons_text-stats-battle">Sa puissance est de : {pokemon.pv + pokemon.attack + pokemon.defense + pokemon.attack_spe + pokemon.defense_spe + pokemon.speed}</p>
                        </div>
                    ))}    
                </div>
            </div>
        );
};

export default GetRandomPokemons;