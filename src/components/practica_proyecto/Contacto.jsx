import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit } = useForm()

    const eviar = (data) =>{
console.log(data)
    }

    return (
        <div className='container'>
            <h2 className="main-title">Contatenos</h2>
            <form className="formulario" onSubmit={handleSubmit(eviar)} >

                <input type="text" placeholder="Ingrese Nombre" {...register("name")} />
                <input type="text" placeholder="Ingrese Correo" {...register("email")}/>
                <input type="text" placeholder="Ingrese Telefono" {...register("phone")}/>

                <button type="submit" className="enviar">enviar</button>
            </form>
        </div>

    )
}


export default Contacto