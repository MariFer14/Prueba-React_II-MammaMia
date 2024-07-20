import React from "react";
import Home from "./views/Home";
import Navbar from "./componentes/Navigate";
import DescripcionProducto from "./views/DescripcionProducto";
import Carrito from "./views/Carrito";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DescripcionProducto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
