import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'
import { CartContext } from './context/CartContext'

const ItemDetail = ({ item }) => {

  const { carrito, addCarrito } = useContext(CartContext)

  console.log(carrito)

  const [count, setCount] = useState(1)

  const handleSumar = () => {
    count < item.stock && setCount(count + 1)
  }

  const handleRestar = () => {
    count > 1 && setCount(count - 1)
  }


  return (
    <div className='container'>
      <div className='producto-detalle'>
        <div>
          <h3 className='titulo'>{item.titulo}</h3>
          <p className='descripcion'>descripcion: {item.description}</p>
          <p className='categoria'>imagen: {item.imagen}</p>
          <p className='precio'>precio: ${item.precio}</p>
          <ItemCounter
            count={count}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
            handleAgregar={() => {addCarrito(item, count)}}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail