import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { routes } from './route/routes'

function App() {

  return (
    <Routes>
     {routes.map(({path,element})=>(
       <Route path={path} element={element} />
     ))}
    </Routes>
  )
}

export default App
