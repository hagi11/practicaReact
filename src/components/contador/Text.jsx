import { useState } from 'react'
import TextH2 from './TextH2'

const  Text = () => {
    const [show, setShow] = useState(false)

    const cambiar = () =>{
        setShow(!show)
    }

  return (
    <div>
        <button type="button" onClick={cambiar} > {show ? "Ocultar" : "Mostrar"}</button>
        {show && <TextH2 />}


      {/* {show ? <p>Mostar texto</p> : <p>ocultar texto</p>} */}
      {/* {show === true ? <p>Mostar texto</p> : <p>ocultar texto</p>} */}
    </div>
  )
}

export default Text
