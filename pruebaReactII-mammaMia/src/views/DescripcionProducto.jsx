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
    <div className="producto">
      <div className="image">
        <img src={seleccionarPizza.img} alt={seleccionarPizza.name} />
      </div>
      <div className="descripcionContainer">
        <div className="detalles">
          <h1>{seleccionarPizza.name}</h1>
          <hr />
          <p>{seleccionarPizza.desc}</p>
          <strong>Ingrdientes:</strong>
          <ul>
            {seleccionarPizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="precioPizza">
          <h3>Precio: ${seleccionarPizza.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default DescripcionProducto;
