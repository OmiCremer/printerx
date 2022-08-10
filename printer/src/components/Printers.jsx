import React from 'react'
import {useState, useEffect, useContext} from 'react'
import Printer from './Printer'
import {listaImpresoras} from '../service/impresoraService'
import {Context} from '../context/ContextGeneral'

export default function Printers() {
  
  const [impresoras, setImpresoras] = useState([])
  
  useEffect(() =>{
    const impresoras = async ()=>{
      try{
        const data = await listaImpresoras()
        setImpresoras(data)
      }catch(error){
        console.log(error)
      }
    } 
    impresoras()
  },[])

  const {uno} = useContext(Context)
  const result = impresoras.filter(impresoras => impresoras.categoria === uno)

  return (
    <>
    <div className= "lista_productos">
      {!uno && impresoras?.map((impresora, index) => 
      <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img} categoria = {impresora.categoria}/>)}
    </div>
    <br/>
    <div className= "lista_productos">
      {result?.map((impresora, index) => 
      <Printer key= {index} id={impresora.id} nombre={impresora.nombre} img = {impresora.img} categoria = {impresora.categoria}/>)}
    </div>
    </>
  )
}