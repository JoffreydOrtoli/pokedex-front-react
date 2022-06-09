import React from 'react';
import GetAllPokemons from "../components/GetPokemons";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <GetAllPokemons />
        </div>
    );
};

export default Home;