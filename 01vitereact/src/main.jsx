import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Output from './krishna.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Output />
  </StrictMode>,
)
