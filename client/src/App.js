import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/Landing/Landing.jsx';
import React from "react";
import Detail from './pages/Detail/Detail';
import AllCountries from './pages/AllCountries/AllCountries';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/countries' element={<AllCountries />} />
        <Route path='/countries/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
