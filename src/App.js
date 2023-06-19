import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// let name = "Saroj";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Nav"/>
      <Textform heading="Enter the text to analyze"/>
    </>
  );
}

export default App;
