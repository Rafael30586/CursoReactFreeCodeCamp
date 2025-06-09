import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'

function App() {
  
  return (
    <>
      <Contact img="src/assets/Felix.jpg" name="Felix" phone="(212) 555 1234" email="felix@gmail.com"></Contact>
      <Contact img="src/assets/Garfield.jpg" name="Garfield" phone="(212) 555 2345" email="garfield@yahoo.com"></Contact>
      <Contact img="src/assets/Heatcliff.jpg" name="Heatcliff" phone="(212) 555 4567" email="heatcliff@hotmail.com"></Contact>
      <Contact img="src/assets/DonGato.jpg" name="DonGato" phone="(0800) CAT KING" email="dongato@gmail.com"></Contact>
    </>
  )
}

export default App
