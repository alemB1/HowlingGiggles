import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import './index.css'
import CardsHolder from './components/CardsHolder/CardsHolder.jsx'
import Sort from './components/sort/Sort.jsx'
import PostPage from './components/PostPage/PostPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <PostPage />
  </React.StrictMode>,
)
