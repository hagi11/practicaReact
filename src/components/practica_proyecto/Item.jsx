import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ lista }) => {
    return (
        <div key={lista.id} className='producto'>
            <div>
                <h4>{lista.titulo}</h4>
                <p>image: {lista.imagen}</p>
                <p>descripcion: {lista.description}</p>
                <p>precio: ${lista.precio}</p>
                <Link className='ver-mas' to={`/Item/${lista.id}`}>Ver mas</Link>
            </div>
        </div>
    )
}

export default Item