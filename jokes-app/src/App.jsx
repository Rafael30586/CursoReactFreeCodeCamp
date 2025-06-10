import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './components/Joke'

function App() {
  
  return (
    <>
      <Joke setup="What do you call a pony with a cough?" punchline="A little horse."></Joke>
      <Joke setup="What did one hat say to the other?" punchline="You wait here. I’ll go on a head."></Joke>
      <Joke setup="What do you call a magic dog?" punchline="A labracadabrador."></Joke>
      <Joke setup="What did the shark say when he ate the clownfish? " punchline="This tastes a little funny."></Joke>
      <Joke punchline="And that’s how I ended up with a llama in my bathtub and no explanation for the insurance company."></Joke>
    </>
  )
}

export default App
