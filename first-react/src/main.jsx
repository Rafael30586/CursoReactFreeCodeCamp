import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createElement } from 'react'

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1",null,"Hello from createElement")

root.render(/*
  <StrictMode>
    <App />
  </StrictMode>*/
  reactElement,
)
