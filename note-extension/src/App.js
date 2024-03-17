
import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Nav from './components/Nav';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;





