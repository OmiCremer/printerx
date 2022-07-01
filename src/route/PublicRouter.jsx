import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Detalle from '../pages/detalle'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = { <Home />} />
        <Route path = '/home' element = { <Home />} />
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </div>
  )
}
