import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index10.css'
import App from './App.jsx'
import App10 from './App10.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App10 darkmode={false}/>
  </StrictMode>,
)
