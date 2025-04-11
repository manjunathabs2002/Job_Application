import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
