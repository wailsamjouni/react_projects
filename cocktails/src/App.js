// import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpecialCocktail from './pages/SpecialCocktail';
import Error from './pages/Error'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/cocktail/:id' element={<SpecialCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
