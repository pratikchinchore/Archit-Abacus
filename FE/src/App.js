import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/pages/Dashboard';

import Footer from './Pages/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router basename="/Archit-Abacus">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;