import { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
//import viteLogo from '/vite.svg'
import 'react-widgets/scss/styles.scss';
import './sass/style.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'react-vertical-timeline-component/style.min.css';
import Header from './layout/Header2/index.jsx';
import Home from './pages/Home/Home.jsx'
import Backgrounds from './pages/Backgrounds/Backgrounds.jsx'
import Repos from './pages/Repos/Repos.jsx'
import Tables from './pages/Tables/Tables.jsx'


function App() {
  return ( 
  <HashRouter>
    <Header/>
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backgrounds" element={<Backgrounds />} />
          <Route path="/repos" element={<Repos />} />Tables
          <Route path="/tables" element={<Tables />} />
      </Routes>
  </HashRouter>
  )
}

export default App
