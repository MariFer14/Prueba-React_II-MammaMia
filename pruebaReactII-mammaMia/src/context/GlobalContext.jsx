import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [seleccionarPizza, setSeleccionarPizza] = useState(null);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  return (
    <PizzaContext.Provider
      value={{ pizzas, seleccionarPizza, setSeleccionarPizza, getPizzaById }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
