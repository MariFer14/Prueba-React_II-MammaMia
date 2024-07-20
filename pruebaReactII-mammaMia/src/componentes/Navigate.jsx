import React, { useContext } from "react";
import PizzaIcon from "../assets/pizzaIcon.png";
import { Link } from "react-router-dom";
import CarritoIcon from "../assets/carritoIcon.png";
import { PizzaContext } from "../context/GlobalContext";

function Navigate() {
  const { carrito } = useContext(PizzaContext);

  const totalEnCarrito = carrito.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={PizzaIcon} alt="Icono Pizza" />
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h5>Pizzería Mamma Mia!</h5>
          </Link>
        </div>
        <div className="carrito">
          <Link to="/carrito" style={{ textDecoration: "none" }}>
            <img src={CarritoIcon} alt="Icono Carrito" />
            <span>{totalEnCarrito.toFixed(2)}</span>
          </Link>
        </div>
      </nav>
      <header>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
        <hr />
      </header>
    </div>
  );
}

export default Navigate;
