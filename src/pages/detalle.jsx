import React from 'react';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {unaImpresora} from '../service/impresoraService'
export default function Detalle() {
  const {id} = useParams()
  const [impresoraID, setImpresorasID] = useState({})

  useEffect(() => {
    const oneImpresora = () => {
      try {
        const response = unaImpresora(id)
        setImpresorasID(response)
        console.log(response)
        console.log(id)
        
      }catch(error){
        console.error(error)
      }
    }
    oneImpresora()
  },[id])
  console.log(impresoraID)

  return (
    <div className="producto">
          <p>{impresoraID.nombre}</p>
          <p>{impresoraID.id}</p>
          <img src = {impresoraID.img} alt={impresoraID.nombre}/>
    </div>
  )
}
