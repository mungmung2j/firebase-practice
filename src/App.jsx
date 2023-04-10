import './App.css';
import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
