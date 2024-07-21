import React, { useContext } from "react";
import { PizzaContext } from "../context/GlobalContext";
import { Button, Col, Row } from "react-bootstrap";

function Carrito() {
  const { carrito, incrementPizza, decrementPizza } = useContext(PizzaContext);

  const totalPizzas = carrito.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container-pedido">
      <h3>Detalles del pedido</h3>
      <div className="pedido">
        {carrito.length === 0 ? (
          <p>No hay pedidos en el carrito</p>
        ) : (
          <div>
            {carrito.map((item) => (
              <Row key={item.id} className="mb-4">
                <Col>
                  <div className="itemsCarrito">
                    <div className="image" style={{ marginRight: "20px" }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "100px" }}
                      />
                      <h5>{item.name}</h5>
                    </div>
                    <div className="detalles">
                      <p>Precio: ${item.price}</p>
                      <Button
                        onClick={() => incrementPizza(item.id)}
                        className="btn btn-primary"
                      >
                        +
                      </Button>
                      <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                      <Button
                        onClick={() => decrementPizza(item.id)}
                        className="btn btn-danger"
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
            <Row>
              <Col>
                <h4>Total: ${totalPizzas.toFixed(2)}</h4>
                <Button className="btn btn-success">Ir a pagar</Button>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrito;
