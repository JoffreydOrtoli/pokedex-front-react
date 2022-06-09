import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Types from './pages/Types';
import PokemonsType from './pages/PokemonsType';
import BattlePage from './pages/BattlePage';
import GetRandomPokemons from './components/GetRandomPokemons';
import AddCardToDeck from './components/AddCardToDeck';
import RemoveCardToDeck from './components/RemoveCardToDeck';
import DeckPage from './pages/DeckPage';
import Register from './pages/Register';
import Login from './pages/Login';
import ProfilPage from './pages/ProfilPage';
import LogOut from './pages/LogOut';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemons/:id" element={<Pokemon />} />
                <Route path="/types" element={<Types />} />
                <Route path="/types/:id" element={<PokemonsType />} />
                <Route path="/deck" element={<DeckPage />} />
                <Route path="/deck/add/:id" element={<AddCardToDeck />} />
                <Route path="/deck/remove/:id" element={<RemoveCardToDeck />} />
                <Route path="/battle" element={<BattlePage />} />
                <Route path="/battle/fight" element={<GetRandomPokemons />} />
                <Route path="/user/register" element={<Register />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/profil" element={<ProfilPage />} />
                <Route path="/user/logOut" element={<LogOut />} />
                {/* Remplacer par 404 */}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;