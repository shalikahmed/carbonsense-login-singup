import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import './register.css';
import { Login } from "./login";
import { Register } from "./register";
import NavBar from "./NavBar";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
      <div className="App">

        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
