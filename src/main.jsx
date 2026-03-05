import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Fonts (via Google Fonts or CSS, but easier to inject link here or in index.html)
// Creating a link element dynamically or assuming index.html has it. 
// I will just import the CSS.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
