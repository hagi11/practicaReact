import { useState } from "react";

const Contacto = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        phone: "",
    })

    const handleEnvio = (e) => {
        e.preventDefault();
        console.log("eviado")
        console.log("datos: ", values)
    }

    const handleValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <h2 className="main-title">Contatenos</h2>
            <form className="formulario" onSubmit={handleEnvio}>
                <input
                    type="text"
                    placeholder="Ingrese nombre"
                    value={values.name}
                    onChange={handleValues}
                    name="name"
                />

                <input
                    type="text"
                    placeholder="Ingrese Correo"
                    value={values.email}
                    onChange={handleValues}
                    name="email"
                />
                <input
                    type="text"
                    placeholder="Ingrese Correo"
                    value={values.email}
                    onChange={handleValues}
                    name="email"
                />
                <input
                    type="text"
                    placeholder="Ingrese telefono"
                    value={values.phone}
                    onChange={handleValues}
                    name="phone"
                />

                <button type="submit" className="enviar">enviar</button>
            </form>
        </div>

    )
}


export default Contacto