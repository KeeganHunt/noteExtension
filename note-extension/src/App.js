// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Home from './components/Home';
import SignUp from './components/SignUp';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<SignUp />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;





