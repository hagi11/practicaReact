import data from '../../../archivos/productos.json'


export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const itemId = data.find((item) => item.id === id)
        if (itemId) {
            resolve(itemId)
        } else {
            reject({ error: "No se encontro" })
        }
    })
}
