import {React, useEffect, useState} from 'react'

const PokemonList = () => {
    const [pokeList, setPokeList] = useState({})
    const [pokeLink, setPokeLink] = useState("https://pokeapi.co/api/v2/pokemon?limit=5")   

    useEffect(() => {
        fetch(pokeLink)
        .then((res) => res.json())
        .then((data) =>  {
            setPokeList(data)
            console.log(data)
        })
    },[pokeLink])

    const handleBtnSigu = () => {
        setPokeLink(pokeList.next)
    }
    const handleBtnAnt  = () => {
        if(pokeList.previous !== null){
            setPokeLink(pokeList.previous)
        }
    }

  return (
    <div>
        <div>
            {pokeList.results && 
            pokeList.results.map(
                (poke =>
                    <div key={poke.name}>
                        <p>{poke.name}</p>
                    </div>
                )) }
        </div>
        {pokeList.previous !== null ? <button onClick={handleBtnAnt}>Anterior</button>
        : <button disabled>Anterior</button>}
        <button onClick={handleBtnSigu} >Siguiente</button>
    </div>

  )
}

export default PokemonList
