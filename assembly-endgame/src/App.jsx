
import AssemblyHeader from './components/AssemblyHeader'
import Languages from './components/Languages'
import StatusSection from './components/StatusSection'
import React from 'react'


function App() {

  const [currentWord, setCurrentWord] = React.useState("React")

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
 
  return (
    <>
      <AssemblyHeader></AssemblyHeader>
      <StatusSection></StatusSection>
      <main>
        <Languages></Languages>
        <section id='currentWord'>{charToSpan()}</section>
      </main>
    </>
  )
}

export default App
