import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Add from "./containers/Add/Add";
import Edit from "./containers/Edit/Edit";

function App() {
  return (
    <div className="App">
      <div style={{borderBottom: '1px solid black', paddingBottom: '5px'}}>
        <h3 style={{margin: '0'}}>Calorie tracker</h3>
      </div>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/add-meal" element={(
          <Add/>
        )}/>
        <Route path="/edit-meal/:id" element={(
          <Edit/>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
