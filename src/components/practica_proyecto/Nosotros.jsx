import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clicker = () => {
      console.log("cli");
    }

    window.addEventListener("click", clicker)

    return () => {
      window.removeEventListener("click", clicker)
    }

  }, [])

  return (
    <div className='container'>
      <h2 className='main-title'>Nosotros somos los </h2>
    </div>
  )
}

export default Nosotros
