import {React, useEffect, useState} from 'react'

const ApiPythonConsum = () => {
    const [lista, setLista] = useState()
    const url = "http://127.0.0.1:5000/api/computers" 

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) =>  {
            console.log(data)
            setLista(data)
        })
    },[])

  return (
    <div>
        <div>
            {lista && 
            lista.computadoras.map(
                (list =>
                    <div key={list.id}>
                        <p>{list.name}</p>
                        <p>{list.description}</p>
                        <p>{list.price}</p>
                        <p>{list.DateEntry}</p>
                    </div>
                )) }
        </div>
    </div>

  )
}

export default ApiPythonConsum
