import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CarritoWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
              <li><Link to="/Carrito" className='menu-link'>
              Carrito <span className='numerito'> {cantidadEnCarrito()}</span>
              </Link></li>
    </div>
  )
}

export default CarritoWidget
