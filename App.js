import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
      <footer>© 2024 SAD co. All rights reserved.</footer>
    </div>
  );
}

export default App;
