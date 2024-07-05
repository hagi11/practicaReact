import React, { useEffect, useState } from 'react'
import { getProductById } from './helpers/pedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        getProductById(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
    return (
        <div>
            {item && <ItemDetail item={item} key={item.id} />}
        </div>
    )
}

export default ItemDetailContainer
