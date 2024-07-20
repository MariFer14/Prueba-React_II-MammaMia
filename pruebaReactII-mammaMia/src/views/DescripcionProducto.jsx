import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/GlobalContext";

function DescripcionProducto() {
  const { id } = useParams();
  const { getPizzaById, seleccionarPizza, setSeleccionarPizza } =
    useContext(PizzaContext);

  useEffect(() => {
    const pizza = getPizzaById(id);
    if (pizza) {
      setSeleccionarPizza(pizza);
    }
  }, [id, getPizzaById, setSeleccionarPizza]);

  if (!seleccionarPizza) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{seleccionarPizza.name}</h1>
      <img src={seleccionarPizza.img} alt={seleccionarPizza.name} />
      <p>{seleccionarPizza.desc}</p>
      <div>
        <strong>Ingrdientes:</strong>
        <ul>
          {seleccionarPizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <p>Precio: ${seleccionarPizza.price}</p>
    </div>
  );
}

export default DescripcionProducto;
