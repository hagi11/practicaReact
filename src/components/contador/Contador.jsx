import { useState } from "react"

const Contador = () => {

  const [conter, setCounter] = useState(0);

  function sumar() {
    setCounter(conter +1)
  }

  const restar = () => {
    setCounter(conter-1)
  }

  return (
    <div>
      <h2>{conter}</h2>
      <button type="button" onMouseOver={sumar}>sumar</button>
      <button type="button" onClick={restar}>restar</button>
      <hr />
    </div>
  )
}

export default Contador

