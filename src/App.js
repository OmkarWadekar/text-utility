// import logo from './logo.svg';
import './App.css';
// import * as ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//imrs

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042749';
      showAlert("Dark Mode Enabled", "success");
    }
  }
  return (
      <>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 py-3" >
              {/* <About mode={mode}/> */}
            
              <TextForm showAlert={showAlert} heading="Enter text to analyse below -" mode={mode} />
            
        </div>
      {/* <BrowserRouter>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 py-3" >
          <Routes>

            <Route exact path="/about" element={
              <About mode={mode}/>
            }/>

            <Route path="/" element={
              <TextForm showAlert={showAlert} heading="Enter text to analyse below -" mode={mode} />
            }/>

          </Routes>
        </div>
      </BrowserRouter> */}

      {/* <Navbar /> */}
      {/* <div className="container">
    </div> */}

    </>
  );
}

export default App;
