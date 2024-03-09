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
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register"
import React, {useState} from "react";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login /> : <Register/>
      }
    </div>
  );
}

export default App;

