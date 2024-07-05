import { useEffect, useState } from 'react'
import {getProduct} from './helpers/pedirDatos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [lista, setLista] = useState([])
    const categoria = useParams().categoria



    console.log(lista)
    useEffect(() => {
        getProduct()
        .then((res) => {
          if(categoria){
            setLista(res.filter((prod)=>{return prod.imagen === categoria}))
          }else{
            setLista(res)
          }
        })
    }, [categoria])
    
  return (
    <div>
      <ItemList lista={lista} />
    </div>
  )
}

export default ItemListContainer
