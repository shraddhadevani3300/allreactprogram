import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Increament from './Increament.jsx'
import Messagebox from './Messagebox.jsx'
// import Useref from './Useref.jsx';
// import Map from './Map.jsx';
// import Usecontext from './Usecontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello</h1>
    {/* // <App /> */}
    {/* <Increament /> */}
    {/* <Messagebox/> */}
    {/* <Map/> */}
    <Usecontext/>
    {/* <Useref/> */}
  </StrictMode>
)
