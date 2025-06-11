import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './components/Joke'



function App() {
  
  return (
    <>
      <Joke setup="What do you call a pony with a cough?" punchline="A little horse." votes={1} isPun={true} comments={[
        { author: "Me", comment: "Lame joke"},
        { author: "You", comment: "Cool Joke"},
        { author: "Him", comment: "Amazing joke"}
      ]}></Joke>
      <Joke setup="What did one hat say to the other?" punchline="You wait here. I’ll go on a head." votes={2} isPun={true}></Joke>
      <Joke setup="What do you call a magic dog?" punchline="A labracadabrador." votes={-1} isPun={false}></Joke>
      <Joke setup="What did the shark say when he ate the clownfish? " punchline="This tastes a little funny." votes={0} isPun={true}></Joke>
      <Joke punchline="And that’s how I ended up with a llama in my bathtub and no explanation for the insurance company." votes={3} isPun={false}></Joke>
    </>
  )
}

export default App
