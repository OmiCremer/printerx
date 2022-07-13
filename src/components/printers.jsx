import React from 'react'
import Printer from './Printer'
import impresoras from '../data/impresoras'

export default function Printers() {


  return (
    <div className= "lista_productos">
      {impresoras.map((impresora, index) => 
      <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img}/>)}
    </div>
  )
}
