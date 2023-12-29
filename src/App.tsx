import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FunctionalComp } from './Components/functionalComponent/FunctionalComp';
import Navbar from './Components/classComponent/NavBar';
import { ScrollablePanel } from './Components/functionalComponent/ScrollablePanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FunctionalComp />
      <ScrollablePanel />
    </div>
  );
}

export default App;
