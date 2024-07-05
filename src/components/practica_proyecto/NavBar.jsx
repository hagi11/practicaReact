import React from 'react'
import { Link } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'


const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'>hagi</Link>
      <ul className='menu'>
        <li><Link to="/" className='menu-link'>Inicio</Link></li>
        <li><Link to="/nosotros" className='menu-link'>Nosotros</Link></li>
        <li><Link to="/productos" className='menu-link'>Productos</Link></li>
        <li><Link to="/productos/compu" className='menu-link'>compu</Link></li>
        <li><Link to="/productos/teclado" className='menu-link'>teclado</Link></li>
        <li><Link to="/productos/mouse" className='menu-link'>mouse</Link></li>
        <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>
        <CarritoWidget/>
      </ul>
    </nav>
  )
}

export default NavBar
