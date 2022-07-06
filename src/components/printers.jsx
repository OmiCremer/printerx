import React from 'react'
import Printer from '../components/Printer'
import impresoras from '../data/impresoras'

export default function printers() {


  return (
    <div className= "lista_productos">
      {impresoras.map((impresora, index) => 
      <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img}/>)}
    </div>
  )
}
