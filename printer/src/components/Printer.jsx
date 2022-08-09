import React from 'react'
import {Card, Button, Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Printer(props) {

  const {id, nombre, img}= props

  return (
    <div className="producto">
      <Card   style={{ width: '18rem' }}>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt={img}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt={img}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt={img}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            numero de id: {id}
            </Card.Text>
            <Button as = {Link} to = {'/detalle/' + id} variant="primary">Detalle</Button>
        </Card.Body>
    </Card>
    </div>
  )
}
