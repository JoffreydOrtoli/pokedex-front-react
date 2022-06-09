import React from "react";

const Header = () => {
    return (
      <div>
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm header header-color">
          <h1 className="h1 my-1 mr-md-auto font-weight-normal">Pokedex</h1>
          {localStorage.accesToken ? (<h2 className="h5 my-0 mr-md-auto font-weight-normal">Bonjour {localStorage.firstname}</h2>) : (<></>)}
          <nav className="my-2 my-md-0 mr-md-3 nav-style-link">
            <a className="p-2 header-color nav-title" href="/">Accueil</a>
            <a className="p-2 header-color nav-title" href="/types">Types</a>
            {!localStorage.accesToken ? (<>
              <a className="p-2 header-color nav-title" href="/user/register">Inscription</a>
              <a className="p-2 header-color nav-title" href="/user/login">Connexion</a>
            </>) : (<></>)}
            {localStorage.accesToken ? (<>
                <a className="p-2 header-color nav-title" href="/deck">Deck</a>
                <a className="p-2 header-color nav-title" href="/battle">Bataille</a>
                <a className="p-2 header-color nav-title" href="/user/profil">Profil</a>
                <a className="p-2 header-color nav-title" href="/user/logOut">Déconnexion</a>
              </>) : (<></>)}
          </nav>
        </header>
      </div>
    );
  
};

export default Header;
