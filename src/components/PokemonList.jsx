import { useState, useEffect } from 'react';

const PokemonList = ({ setSinglePokemonDetails }) => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async() => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const responseJson = await response.json();
      const retrievedPokemon = responseJson.results;
      // console.log(retrievedPokemon);
      setAllPokemon(retrievedPokemon);
    }

    getPokemon();
  }, []);

  const getPokemonDetails = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl);
    const details = await response.json();
    setSinglePokemonDetails(details);
  }

  return (
    <ul>
      {
        allPokemon.map((singlePokemon) => {
          return (
            <li 
              key={singlePokemon.url} 
              onClick={() => { 
                getPokemonDetails(singlePokemon.url);
              }} 
            >{singlePokemon.name}</li>
          )
        })
      }
    </ul>
  )
}

export default PokemonList;

