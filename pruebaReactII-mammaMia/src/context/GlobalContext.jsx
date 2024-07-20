import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [seleccionarPizza, setSeleccionarPizza] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  const addToCarrito = (pizza) => {
    setCarrito((prevCarrito) => {
      const existingPizza = prevCarrito.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCarrito, { ...pizza, quantity: 1 }];
    });
  };

  const incrementPizza = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementPizza = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        seleccionarPizza,
        setSeleccionarPizza,
        getPizzaById,
        carrito,
        addToCarrito,
        incrementPizza,
        decrementPizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
