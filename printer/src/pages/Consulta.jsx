import React from 'react'
import {useState} from 'react'
import Input from '../components/Input'
import {Form, Button, Container} from 'react-bootstrap'

export default function Consulta() {

    const [registro, setRegistro] = useState({nombre:'', direccion:'', mail:'', telefono:'', consulta:''})
    const datosRegistro = (event) => {
        const name = event.target.name
        const value = event.target.value
        setRegistro({...registro, [name]:value})
    }
   
    const guardarDatos = async (event) => {   
        event.preventDefault()
        try{
          let config = {
            method: 'POST',
            headers: {'Accept':'application/json',
                      'content-Type' : 'application/json'},
            body: JSON.stringify(registro)
          }
          const response = await fetch("/api/consultas", config)
          const json =  await response.json()
          return json
        }catch(e){
          console.log(e)
        }
  }

  return (
    <div>
      <Container>
      <Form formAction="https://formsubmit.co/pisciano_sincero@hotmail.com" onSubmit={guardarDatos}>
        <Input type="text" name= 'nombre' placeholder="Nombre y Apellido" change={datosRegistro}/>
        <Input type="text" name= 'direccion' placeholder="Direccion" change={datosRegistro}/>
        <Input type="mail" name= 'mail' placeholder="E-mail" change={datosRegistro}/>
        <Input type="text" name= 'telefono' placeholder="Telefono" change={datosRegistro}/>
        <Input type="text" name= 'consulta' placeholder="Realice su consulta" change={datosRegistro}/>
        <br/>
        <Button type="submit">Enviar Consulta</Button>
      </Form>
      </Container>
    </div>
  )
    }
