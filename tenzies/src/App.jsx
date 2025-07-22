
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
import React from 'react'


function App() {

  const [numbers,setNumbers] = React.useState(generateAllNewDice())
  // let id = 1
  function generateAllNewDice(){
    let dice = []
    for(let i=0;i<10;i++){
      dice.push((Math.floor(Math.random() * 6) + 1))
    }
    return dice
  }

  let diceArray = numbers.map((number,index)=>{
    let dieId = "die".concat(index) // Generación del id para el Die component que servirá después para el grid de css
    return <Die id={dieId} value={number}></Die>
  })

  function rollDice(){
    setNumbers(()=>{
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
