import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from './route/publicRoute'
import { privateRoutes } from './route/privateRoute'
import ProtectedRoute from './route/ProtectedRoute'
import AuthRoute from './route/AuthRoute'

function App() {

  return (
    <Routes>
     {publicRoutes.map(({path,element})=>(
       <Route path={path} key={path} element={element} />
     ))}
     
     {privateRoutes.map(({path,element})=>(
       <Route key={path} element={<ProtectedRoute />}>
        <Route
          // key={route.path}
          exact
          path={path}
          element={element}
        />
        </Route>
      ))}
      {authRoutes.map(({path,element})=>(
       <Route key={path} element={<AuthRoute />}>
        <Route
          // key={route.path}
          exact
          path={path}
          element={element}
        />
        </Route>
      ))}
    </Routes>
  )
}

export default App
