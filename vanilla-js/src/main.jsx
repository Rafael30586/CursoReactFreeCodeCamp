import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"));
const h1 = createElement("h1",null,"Hola desde createElement");
console.log(h1)


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
