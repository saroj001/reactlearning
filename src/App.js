import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
// import BmiCalculator from './components/BmiCalculator';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
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
      document.title = 'TextUtils - Dark Mode Enabled';
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
      document.title = 'TextUtils - Light Mode Enabled';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <About /> */}
      <Alert alert={alert} />
      <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      {/* <BmiCalculator /> */}
    </>
  );
}

export default App;
