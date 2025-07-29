import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Person } from './page/Person'
import { Home } from './page/Home'
import { EditPerson } from './page/EditPerson'
import { Phones } from './page/Phones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './component/Menu'


function App() {

  const [isLogIn, setLogIn] = useState(false)

  const validateToken = () => {

    const token = localStorage.getItem("token")
    if (token) {
      setLogIn(true)
    }

  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <>
      <BrowserRouter>
        { isLogIn && <Menu auth={setLogIn} /> }
        <Routes>
          <Route path='/' element={<Home auth={setLogIn} />} />
          {isLogIn && <Route path='/person' element={<Person />} />}
          {isLogIn && <Route path='/editPerson/:id_person' element={<EditPerson />} />}
          {isLogIn && <Route path='/phone/:person_id' element={<Phones />} />}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
