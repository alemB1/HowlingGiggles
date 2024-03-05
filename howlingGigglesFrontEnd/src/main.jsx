import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import './index.css'
import MainCards from './components/CardsHolder/CardsHolder.jsx'
import CardsHolder from './components/CardsHolder/CardsHolder.jsx'
import Sort from './components/sort/Sort.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <MainContent />
    <Sort />
    <CardsHolder />
  </React.StrictMode>,
)
