
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
import React from 'react'


function App() {

  const [numbers,setNumbers] = React.useState(generateAllNewDice())
  let id = 1
  function generateAllNewDice(){
    let dice = []
    for(let i=0;i<10;i++){
      dice.push((Math.floor(Math.random() * 6) + 1))
    }
    return dice
  }

  let diceArray = numbers.map((number)=>{
    let dieId = "die".concat(id) // Generación del id para el Die component que servirá después para el grid de css
    id++ // Aumento en el id para que genere un id distinto en el próximo Die component
    return <Die id={dieId} value={number}></Die>
  })

  console.log(generateAllNewDice())

  return (
    <main>
      <div id='dice-container'>
        {diceArray}
      </div>
    </main>
  )
}

export default App
