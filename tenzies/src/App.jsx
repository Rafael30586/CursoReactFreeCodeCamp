import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'


function App() {
  return (
    <main>
      <div id='dice-container'>
        <Die id="die1" value="3"></Die>
        <Die id="die2" value="5"></Die>
        <Die id="die3" value="1"></Die>
        <Die id="die4" value="2"></Die>
        <Die id="die5" value="2"></Die>
        <Die id="die6" value="6"></Die>
        <Die id="die7" value="5"></Die>
        <Die id="die8" value="6"></Die>
        <Die id="die9" value="6"></Die>
        <Die id="die10" value="1"></Die>
      </div>
    </main>
  )
}

export default App
