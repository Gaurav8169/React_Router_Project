import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
 
 
import Login from './Comonents/Login'
import Register from './Comonents/Register'
import Home from './Comonents/Home'
import ProtectedRoutes from './Services/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProtectedRoutes/>}>
        <Route path = '/' element={<Home/>}></Route>
        </Route>
         
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/register' element={<Register/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
