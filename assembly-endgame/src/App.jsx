
import AssemblyHeader from './components/AssemblyHeader'
import Languages from './components/Languages'
import StatusSection from './components/StatusSection'
import React from 'react'


function App() {

  const [currentWord, setCurrentWord] = React.useState("React")
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const [guessedLetters, setGuessedLEtters] = React.useState([])
  console.log(guessedLetters)

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
    let spanCharacters = charArray.map(char=><span className='char'>{char.toUpperCase()}</span>)
    return spanCharacters
  }

  function alphabetToArray(){
    let wordLength = alphabet.length
    let charArray = alphabet.split("")
    return charArray
  }

  function createKeyboard(){
    let charArray = alphabetToArray()
    let keyboard = charArray.map((char,index) => <span onClick={() => addGuessedLetter(char)} className='key' id={`key${(index+1)}`}>{char.toLocaleUpperCase()}</span>)
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
 
  return (
    <>
      <AssemblyHeader></AssemblyHeader>
      <StatusSection></StatusSection>
      <main>
        <Languages></Languages>
        <section id='currentWord'>{charToSpan()}</section>
        <section className='keyboard'>{createKeyboard()}</section>
        <button className="new-game">New Game</button>
      </main>
    </>
  )
}

export default App
