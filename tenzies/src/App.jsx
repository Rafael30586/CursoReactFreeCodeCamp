
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
    return <Die id={dieId} value={die.value} key={die.id} class={die.isHeld ? "die held-die" : "die"} hold={hold} nanoId={die.id}></Die>
  })

  function rollDice(){
    setDice(prevDice=>{
      let newDice = []
      for(let die of prevDice){
        if(die.isHeld===true){
          newDice.push(die)
        }else{
          die.value = (Math.floor(Math.random() * 6) + 1)
          newDice.push(die)
        }
      }
      return newDice
    })

  }

  function hold(id){
    setDice(prevDice=>{
      let newDice = []
      let holdDie
      for(let singleDie of prevDice){
        if(id===singleDie.id){
          holdDie = {
            ...singleDie,
            isHeld: !singleDie.isHeld
          }
          newDice.push(holdDie)
        }else{
          holdDie = {
            ...singleDie
          }
          newDice.push(holdDie)
        }
      }
      return newDice
    })
  }

  console.log(generateAllNewDice())

  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div id='dice-container'>
        {diceArray}
      </div>
      <button id='roll-button' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
