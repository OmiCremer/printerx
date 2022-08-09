import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Consulta from '../pages/Consulta'
import Detalle from '../pages/Detalle'
import Nosotros from '../pages/Nosotros'


export default function Router() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = { <Home />} />
        <Route path = '/home' element = { <Home />} />
        <Route path = '/consulta' element = { <Consulta />} />
        <Route path = '/Nosotros' element = { <Nosotros />} />
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </div>
  )
}
