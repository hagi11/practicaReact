import React from 'react'
import Item from './Item'

const ItemList = ({ lista }) => {
    return (
        <div className='container'>
            <h2 className='main-title'>Productos</h2>
            <div className='productos' >
                {lista.map((list) => {
                    return <Item lista={list} key = {list.id} />
                })}
            </div>
        </div>
    )
}

export default ItemList
