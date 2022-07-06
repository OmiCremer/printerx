import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Printer(props) {

  const {id, nombre, img}= props

  return (
    <div className="producto">
      <Card   style={{ width: '18rem' }}>
        
          {/* // hacer un upload de imagen a algun servidor gratuito y consumir de ahi
          // o hacer un api server con express problema con esto es que no se si los servicios de hosting soporta proxys internos */}

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
