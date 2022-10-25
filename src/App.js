import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { searchPokemon } from "./Api";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [pokemon, setPokemon] = useState();
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };
  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      <div>
        {pokemon ? (
          <div>
            <div>Name: {pokemon.name}</div>
            <div>Weight: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ) : null}
      </div>
      <Pokedex />
    </div>
  );
}

export default App;
