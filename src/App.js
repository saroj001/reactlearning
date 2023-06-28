import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import BmiCalculator from './components/BmiCalculator';
import Textform from './components/Textform';
import Alert from './components/Alert';


export default function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode=== 'light') {
      setMode('dark');
      showAlert("Darkmode has been enabled","success");
      document.body.style.backgroundColor = 'black';
      // document.title = 'TextUtils - Dark Mode Enabled';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing app';        
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install text utils now go get great experince';        
      // }, 1200);
    }
    else{
      setMode('light');
      showAlert("Lightmode has been enabled","success");
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode Enabled';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
          <Route index element={<Textform showAlert={showAlert} mode={mode} heading='Try TextUtils - Word COunter, Character Counter, Remove Extra Spaces' />} />
          <Route exact path='/about' element={<About mode={mode} />} />
          <Route exact path='/bmicalculator' element={<BmiCalculator />} />
      </Routes>
    </>
  );
}