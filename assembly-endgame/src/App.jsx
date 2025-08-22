
import AssemblyHeader from './components/AssemblyHeader'
import Languages from './components/Languages'
import StatusSection from './components/StatusSection'
import React from 'react'
import clsx from 'clsx'
import { languages } from './languages'


function App() {
  
  // state values
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLEtters] = React.useState([])

  //derived values
  let wrongGuessCount = 0
  setWrongGuessCount()
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length -1
  console.log('Game lost:', isGameLost)
  const isGameOver = isGameLost || isGameWon
  
  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  console.log(guessedLetters)

  
  console.log('WrongGuessCount: ',wrongGuessCount)
  
  
  console.log('Game over:', isGameOver)

  function converToArray(){
    let wordLength = currentWord.length
    let charArray = []
    for(let i=0;i<wordLength;i++){
      charArray.push(currentWord.charAt(i))
    }
    return charArray
  }

  function charToSpan(){
    let charArray = converToArray()
    let spanCharacters = charArray.map(char=>{
      if(currentWord.includes(char) && guessedLetters.includes(char)){
        return <span className='char'>{char.toUpperCase()}</span>
      }else{
        return <span className='char'>_</span>
      }
    })
    return spanCharacters
  }

  function alphabetToArray(){
    //let wordLength = alphabet.length
    let charArray = alphabet.split("")
    return charArray
  }

  function createKeyboard() {
    let charArray = alphabetToArray()

    let keyboard = charArray.map((char, index) => {
      let charPresent = false
      let charAbsent = false
      if (guessedLetters.includes(char) && currentWord.includes(char)) {
        charPresent = true
      }
      else if(guessedLetters.includes(char) && !currentWord.includes(char)){
        charAbsent = true
      }

      return <span onClick={() => addGuessedLetter(char)} className={clsx('key',{'correct-key':charPresent,'wrong-key':charAbsent})} id={`key${(index + 1)}`}>{char.toLocaleUpperCase()}</span>
    })
    return keyboard
  }

  function addGuessedLetter(char){
    setGuessedLEtters(prevGuessedLetters => {
      let newGuessedLettersSet = new Set(prevGuessedLetters)
      newGuessedLettersSet.add(char)
      let newGuessedLetters = [...newGuessedLettersSet]
      //console.log(newGuessedLetters)
      return newGuessedLetters
    })
  }

  function setWrongGuessCount(){
    wrongGuessCount = 0
    for(let letter of guessedLetters){
      if(!currentWord.includes(letter)){
        wrongGuessCount++
      }
    }
  }


  return (
    <>
      <AssemblyHeader></AssemblyHeader>
      <StatusSection></StatusSection>
      <main>
        <Languages wrongGuessCount={wrongGuessCount}></Languages>
        <section id='currentWord'>{charToSpan()}</section>
        <section className='keyboard'>{createKeyboard()}</section>
        {isGameOver && <button className="new-game">New Game</button>}
      </main>
    </>
  )
}

export default App
