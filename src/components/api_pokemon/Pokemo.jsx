import React, { useEffect, useState } from 'react'

const Pokemo = () => {

    const [pokemon, setPokemon] = useState() 
    const [numPokemon, setNumPokemon] = useState(1) 

    function handleBtnSigu(){
        setNumPokemon(numPokemon +1)
    }

    function handleBtnAnt(){
        if(numPokemon>1){
            setNumPokemon(numPokemon -1)
        }
    }

//   fetch("https://pokeapi.co/api/v2/pokemon/1")
//     .then((res) => {
//         return res.json()
//     }).then((data)=>{
//         console.log(data)
//     })

    useEffect(()=>{
        // fetch("https://pokeapi.co/api/v2/pokemon/"+numPokemon)
        fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`)
        .then((res) => res.json())
        .then((data) => (setPokemon(data)))
    },[numPokemon])

  return (
    <div>
        {
            pokemon && 
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>ID: {numPokemon}</p>
                <div>
                    {numPokemon > 1 ? <button onClick={handleBtnAnt}>Anterior</button> : 
                    <button disabled>Anterior</button>}
                    <button onClick={handleBtnSigu} >Siguiente</button>
                </div>
            </div>
        }
    </div>
  )
}

export default Pokemo
