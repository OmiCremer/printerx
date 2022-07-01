import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Printer(props) {

  const {id, nombre, img}= props

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
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
