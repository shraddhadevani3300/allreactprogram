import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Increament from './Increament.jsx'
import Messagebox from './Messagebox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // <App /> */}
    <Increament/>
    <Messagebox/>
  </StrictMode>,
)
