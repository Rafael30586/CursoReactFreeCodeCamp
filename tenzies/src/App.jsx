
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'


function App() {

  const [dice,setDice] = React.useState(generateAllNewDice())
  // let id = 1
  function generateAllNewDice(){
    let diceArray = []
    for(let i=0;i<10;i++){
      //dice.push((Math.floor(Math.random() * 6) + 1))
      diceArray.push({value:(Math.floor(Math.random() * 6) + 1) ,isHeld:false, id: nanoid()})
    }
    return diceArray
  }

  let diceArray = dice.map((die,index)=>{
    let dieId = "die".concat(index) // Generación del id para el Die component que servirá después para el grid de css
    return <Die id={dieId} value={die.value} key={die.id}></Die>
  })

  function rollDice(){
    setDice(()=>{
      return generateAllNewDice()
    })

  }

  console.log(generateAllNewDice())

  return (
    <main>
      <div id='dice-container'>
        {diceArray}
      </div>
      <button id='roll-button' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
