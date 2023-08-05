import { useState, useEffect } from 'react'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Aboutus from './pages/Aboutus'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import BackgroundImg from './assets/background.jpeg'
import axios from 'axios'

export default function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [avatarLetter, setAvatarLetter] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      axios({
        url: 'http://localhost:3000/user',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        if (res.data.success) {
          setAvatarLetter(res.data.data.username.charAt(0).toUpperCase());
          setIsLoggedIn(true)
        }
      })
    }
  }, [])


  return (
    <div
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      // overflow: 'hidden',
      color: 'white'
    }}
    >

      <BrowserRouter>
      <Navbar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      avatarLetter={avatarLetter}
      setAvatarLetter={setAvatarLetter}
      
      />
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aoboutus' element={<Aboutus/>}/>
        <Route path='/profile' element={<Products 
        isLoggedIn={isLoggedIn}  
        setIsLoggedIn={setIsLoggedIn}
        avatarLetter={avatarLetter} 
        setAvatarLetter={setAvatarLetter}
        />}/>
        <Route /> 
       </Routes> 


      </BrowserRouter>
    </div>
  )
}
