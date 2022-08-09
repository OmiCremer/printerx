import React from 'react'
import {useState, useEffect} from 'react'
import Printer from './Printer'
import {listaImpresoras} from '../service/impresoraService'

export default function Printers() {

  const [impresoras, setImpresoras] = useState([])

  useEffect(() =>{
    const impresoras = async ()=>{
      try{
        const data = await listaImpresoras()
        console.log(data)
        setImpresoras(data)
      }catch(error){
        console.log(error)
      }
    } 
    impresoras()
  },[])

  return (
    <div className= "lista_productos">
      {impresoras.map((impresora, index) => 
      <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img}/>)}
    </div>
  )
}
