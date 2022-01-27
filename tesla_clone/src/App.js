import React from 'react';
import {useState} from "react";
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;
