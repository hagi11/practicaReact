import React, { useEffect, useState } from 'react'
import data from '../../archivos/productos.json'

const MapProduct = () => {
    const [products,setProducts] = useState([]);

    function getProduct (){
        return new Promise((resolve, rejec) =>{
            resolve(data)
        })
    }

    useEffect(() => {
        getProduct()
        .then((res) => {
            setProducts(res);
        })
    }, []);



    return (
        <div>
            {products.length > 0 && 
            products.map((product) => 
                <div key={product.id}>
                    <img src={product.imagen} alt={product.titulo} />
                    <h2>{product.titulo}</h2>
                    <p>{product.descripcion}</p>
                    <p>{product.precio}</p>
                </div>
            )
            }
        </div>
    )
}

export default MapProduct