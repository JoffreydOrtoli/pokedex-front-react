import React from 'react';
import Header from "../components/Header";
import GetAllPokemonForOnType from "../components/GetAllPokemonForOnType";

const PokemonsType = () => {
    return (
        <div>
            <Header />
            <GetAllPokemonForOnType />
        </div>
    );
};

export default PokemonsType;