import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Person } from './page/Person'
import { Home } from './page/Home'
import { EditPerson } from './page/EditPerson'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/person' element={<Person/>} />
          <Route path='/editPerson/:id_person' element={<EditPerson/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
