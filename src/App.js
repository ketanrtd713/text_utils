import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from "react"
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = `#277BC0`
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TExT UTilS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes> */}
          {/* <Route path="/about" element={<About/>} exact>
             
          </Route> */}
          {/* <Route path="/" element={<TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>}> */}
          <TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Routes> */}
   
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
