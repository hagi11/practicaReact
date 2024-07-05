// import ApiPythonConsum from "./components/prueba_api_python/apiPythonConsum";

// import { Card } from './components/card/card.js';
// import {MostrarUserInfo} from './components/userInfo/userInfo.js'
// import Contador from './components/contador/Contador.jsx';
// import Text from './components/contador/Text';
// import MapProduct from "./components/itemMapProduct/MapProduct";
// import Pokemo from "./components/api_pokemon/Pokemo";
// import PokemonList from "./components/api_pokemon/PokemonList";
import './style.css';
import NavBar from './components/practica_proyecto/NavBar';
import ItemListContainer from './components/practica_proyecto/itemListContainer';
import ItemDetailContainer from './components/practica_proyecto/ItemDetailContainer';

//Manejo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from './components/practica_proyecto/Nosotros';
import Contacto from './components/practica_proyecto/Contacto';

import { CardProvider } from './components/practica_proyecto/context/CartContext';
import Carrito from './components/practica_proyecto/Carrito';

function App() {
  return (
    <div className="App">
      <CardProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </div>
  );
}

export default App;
