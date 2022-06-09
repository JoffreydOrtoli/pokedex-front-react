import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instance from "../components/Instance";

const GetOnPokemon = () => {
  try {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState([]);

    useEffect(() => {
     Instance
        .get(`pokemons/${id}`)
        .then((res) => {
          setData(res.data)
          setDataType(res.data.types)
        });
    }, []);

    return (
      <>
        <h1 className="detail-pages_title">Details de {data.name}</h1>
        <div id="detail-pokemon">
          <img className="detail-pokemons_img" src={`/img/${data.id}.png`} alt={`pokemon ${data.name}`} />
          <div id="detail-pokemon_infos">
            <h2 className="h3 detail-pokemon_idname">#{data.id} {data.name}</h2>
            {dataType.map((type) =>
              <a key={`${type.id}`} href={`/types/${type.id}`} className={`button_pokemon-type ${type.name.toLowerCase()}`}>{type.name}</a>
            )}
            <h3 className="h5 detail-pokemon_statistiques">Statistiques </h3>
            <div id="stats_and_sidebars">
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">PV</p>
                <p className="detail-pokemon_stats stats-values">{data.pv}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars" style={{ width: data.pv / 0.85 }}></div>
                </div>
              </div>
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">Attaque</p>
                <p className="detail-pokemon_stats stats-values">{data.attack}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars"style={{ width: data.attack / 0.85 }}></div>
                </div>
              </div>
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">Defense</p>
                <p className="detail-pokemon_stats stats-values">{data.defense}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars" style={{ width: data.defense / 0.85 }}></div>
                </div>
              </div>
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">Attaque spé</p>
                <p className="detail-pokemon_stats stats-values">{data.attack_spe}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars" style={{ width: data.attack_spe / 0.85 }}></div>
                </div>
              </div>
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">Défense spé</p>
                <p className="detail-pokemon_stats stats-values">{data.defense_spe}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars" style={{ width: data.defense_spe / 0.85 }}></div>
                </div>
              </div>
              <div className="info_stat">
                <p className="detail-pokemon_stats stats-names">Vitesse</p>
                <p className="detail-pokemon_stats stats-values">{data.speed}</p>
                <div className="capacitys_bars">
                  <div className="stats_bars" style={{ width: data.speed / 0.85 }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.error(err);
  }
};

export default GetOnPokemon;
