// import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  // const [data, dataSet] = useState([])
  // const search = 'a'

  // const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch(url + search)
  //     response = await response.json()
  //     dataSet(response)
  //     console.log(response)
  //   }

  //   fetchMyAPI()
  // }, [search])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
