import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import IndividualProduct from './Pages/IndividualProduct'

function App() {
  

  return (
    <>
      <Routes>

      <Route path='/' element={<Landingpage/>}/>
      <Route path="/viewproduct/:id"  element={<IndividualProduct/>}/>

      </Routes>
      
    </>
  )
}

export default App
