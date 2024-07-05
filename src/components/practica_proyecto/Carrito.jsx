import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    return (
        <div className='container'>
            <h1 className='main-title'>carrito</h1>
            {
                carrito.map((element) => (
                    <div key={element.id}>
                        <h2>{element.titulo}</h2>
                        <p>precio unit: ${element.precio}</p>
                        <p>precio total: ${element.precio * element.count}</p>
                        <p>cantidad: {element.count}</p>
                        <br />
                    </div>
                ))
            }
            {precioTotal() > 0 &&
                <>
                    <h3>Precio total: {precioTotal()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </>}
        </div>
    )
}

export default Carrito
