import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CardProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial)

    const addCarrito = (item, count) => {
        const itemAgregado = { ...item, count }

        const newCarrito = [...carrito];

        const isOnCarrito = newCarrito.find((producto) => producto.id === itemAgregado.id);

        if (isOnCarrito) {
            isOnCarrito.count += count;
        } else {
            newCarrito.push(itemAgregado)
        }

        setCarrito(newCarrito)

    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.count, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + (prod.count * prod.precio), 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    return(
        <CartContext.Provider value={{ carrito, addCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

}