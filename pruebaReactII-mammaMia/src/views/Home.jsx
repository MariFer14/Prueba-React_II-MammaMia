import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/GlobalContext";
import { Card, Col, Row } from "react-bootstrap";
import CarritoIcon from "../assets/carritoIcon.png";
import OjitosIcon from "../assets/ojitos.png";

function Home() {
  const { pizzas, addToCarrito } = useContext(PizzaContext);

  return (
    <div>
      <Row xs={1} sm={2} md={3} xl={5} className="mx-5 my-5">
        {pizzas.map((pizza) => (
          <Col key={pizza.id} className="mb-4 mt-3">
            <Card>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title style={{fontSize:"23px"}}>{pizza.name}</Card.Title>
                <hr />
                <div className="ingredientes">
                  <strong>Ingrdientes:</strong>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="precio">
                  <Card.Text>
                    <strong>$ {pizza.price}</strong>
                  </Card.Text>
                  <div className="botones">
                    <Link
                      to={`/pizza/${pizza.id}`}
                      className="btn btn-info px-4"
                      style={{color:"white"}}
                    >
                      Ver Más
                      <img className="icono" src={OjitosIcon} alt="Icono Ojitos" />
                    </Link>
                    <Link onClick={() => addToCarrito(pizza)} to="/carrito" className="btn btn-danger px-4">
                      Añadir
                      <img className="icono" src={CarritoIcon} alt="Icono Carrito" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
