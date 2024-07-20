import React from "react";
import Home from "./views/Home";
import Navbar from "./componentes/Navigate";
import DescripcionProducto from "./views/DescripcionProducto";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DescripcionProducto />} />
      </Routes>
    </div>
  );
}

export default App;
