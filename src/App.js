import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
// import BmiCalculator from './components/BmiCalculator';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      {/* <About /> */}
      <Textform heading="Enter the text to analyze"/>
      {/* <BmiCalculator /> */}
    </>
  );
}

export default App;
