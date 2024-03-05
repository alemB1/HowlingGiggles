import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< Updated upstream
import Sort from './components/sort/Sort'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sort></Sort>
=======
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <MainContent />
>>>>>>> Stashed changes
  </React.StrictMode>,
  /*branch testing */
)
