import React from 'react'
import Printer from '../components/Printer'
import impresoras from '../data/impresoras.json'
export default function printers() {


  return (
    <div>
      {impresoras.map((impresora, index) => <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img}/>)}
    </div>
  )
}
