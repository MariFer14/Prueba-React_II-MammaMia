import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/GlobalContext";
import { Card, Col, Row } from "react-bootstrap";

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div>
      <h1>¡Pizzería Mamma Mia!</h1>
      <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
      <Row className="px-5">
        {pizzas.map((pizza) => (
          <Col md={2} key={pizza.id} className="mt-5">
            <Card>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <hr />
                <div>
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
                    <strong>Precio: ${pizza.price}</strong>
                  </Card.Text>
                  <div className="botones">
                    <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">
                      Ver Más
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
