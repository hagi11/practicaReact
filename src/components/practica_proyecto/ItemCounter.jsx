
const ItemCounter = ({ count, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>
            <div className='item-count'>
                <button onClick={handleRestar}>-</button>
                <p>{count}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <div>
                <button onClick={handleAgregar} className='agregar-al-carrito'>Agregar al carrito</button>
            </div>
        </div>

    )
}

export default ItemCounter
