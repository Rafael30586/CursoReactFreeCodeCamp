//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import { createElement } from 'react'

const root = createRoot(document.getElementById("root"));
//const reactElement = createElement("h1",null,"Hello from createElement")
//const reactElement = <h1><span>Hello from JSX</span></h1>
const reactElement = <h1 id='hello'>Hello from JSX</h1>

console.log(reactElement)

root.render(/*
  <StrictMode>
    <App />
  </StrictMode>*/
  reactElement,
)
