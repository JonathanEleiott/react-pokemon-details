const PokemonDetails = ({ singlePokemonDetails, setSinglePokemonDetails }) => {

  return (
    <>
      <h1>{singlePokemonDetails.name}</h1>
      <img src={singlePokemonDetails.sprites.front_default} alt={`${singlePokemonDetails.name}'s Picture`} /> 

      <button onClick={() => { setSinglePokemonDetails({}) }}>Back</button>
    </>
  )
}

export default PokemonDetails;