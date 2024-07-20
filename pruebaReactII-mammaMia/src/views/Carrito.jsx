import React, { useContext } from 'react'
import { PizzaContext } from '../context/GlobalContext'
import { Button, Col, Row  } from 'react-bootstrap'

function Carrito() {

  const { carrito, incrementPizza, decrementPizza } = useContext(PizzaContext)
  
  const totalPizzas = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div>
      <h3>Detalles del pedido</h3>
      {carrito.length === 0 ? (
        <p>No hay pedidos en el carrito</p>
      ) : (
          <Row>
            {carrito.map((item) => (
              <Col key={item.id} className='mb-4'>
                <div className='carrito-item'>
                  <img src={item.img} alt={item.name} style={{ width: "100px" }} />
                  <div>
                    <h5>{item.name}</h5>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <Button onClick={() => incrementPizza(item.id)}>+</Button>
                    <Button onClick={() => decrementPizza(item.id)}>-</Button>
                  </div>

                </div>
                
              </Col>
            ))}
            <Col>
              <h4>Total: ${totalPizzas}</h4>
            </Col>
          </Row>
      )}
    </div>
  )
}

export default Carrito