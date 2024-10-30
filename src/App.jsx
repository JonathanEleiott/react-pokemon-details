import { useState } from 'react';

import PokemonList from './components/PokemonList.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';


const App = () => {
  const [singlePokemonDetails, setSinglePokemonDetails] = useState({});
    
  return (
    <>
      <h1>Pokemon Details App</h1>

      {
        singlePokemonDetails.name ?
          <PokemonDetails 
            singlePokemonDetails={singlePokemonDetails} 
            setSinglePokemonDetails={setSinglePokemonDetails} 
          /> :
          <PokemonList setSinglePokemonDetails={setSinglePokemonDetails} />
      }
    </>
  )
}

export default App
