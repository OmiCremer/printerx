import React from 'react'
import {useState} from 'react'
import Input from '../components/Input'
import {Form, Button} from 'react-bootstrap'
import consultas from '../data/consultas.json'

export default function Consulta() {

    const [registro, setRegistro] = useState({nombre:'', direccion:'', mail:'', telefono:'', consulta:''})
    const datosRegistro = (event) => {
        const name = event.target.name
        const value = event.target.value
        setRegistro({...registro, [name]:value})
        console.log(registro)
    }

    const guardarDatos = (event) => {   
      try{
        event.preventDefault()
        const data = consultas.push(registro)
        console.log('base',consultas)
        console.log('data', data)
    }catch(error) {
        console.log(error)
    }
    console.log('diossss', consultas)
  }
  
  return (
    <div>
      <Form onSubmit={guardarDatos}>
        <Input type="text" name= 'nombre' placeholder="Nombre y Apellido" change={datosRegistro}/>
        <Input type="text" name= 'direccion' placeholder="Direccion" change={datosRegistro}/>
        <Input type="mail" name= 'mail' placeholder="E-mail" change={datosRegistro}/>
        <Input type="text" name= 'telefono' placeholder="Telefono" change={datosRegistro}/>
        <Input type="text" name= 'consulta' placeholder="Realice su consulta" change={datosRegistro}/>
        <br/>
        <Button type="submit">Enviar Consulta</Button>
      </Form>
    </div>
  )
    }
