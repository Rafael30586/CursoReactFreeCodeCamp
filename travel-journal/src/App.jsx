import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {

  const hours = new Date().getHours();
  let timeOfDay;

  if(hours < 12){
    timeOfDay = "morning";
  }else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon";
  }else if(hours < 21){
    timeOfDay = "evening";
  }else{
    timeOfDay = "night";
  }

  return (
    <h1>Good {timeOfDay}</h1>
  )
}

export default App


