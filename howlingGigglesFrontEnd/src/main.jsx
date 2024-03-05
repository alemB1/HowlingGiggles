import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Sort from './components/sort/Sort.jsx'
import Card from './components/Card/Card.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <MainContent />
    <Sort />
    <Card />
  </React.StrictMode>,
  /*branch testing */
)
