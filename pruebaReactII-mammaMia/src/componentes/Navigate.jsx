import React from "react";
import PizzaIcon from "../assets/pizzaIcon.png";

function Navigate() {

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={PizzaIcon} alt="Icono Pizza" />
          <h2>Pizzería Mamma Mia!</h2>
        </div>
      </nav>
    </div>
  );
}

export default Navigate;