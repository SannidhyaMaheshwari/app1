import { useState } from "react";
import "./App.css";
//import About from "./componentes/About";
import Navbar from "./componentes/Navbar";
import TextBox from "./componentes/TextBox";
import Alert from "./componentes/Alert";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  /*  let a = 1;
  setInterval(() => {
    console.log(a)
    if(a===1){document.title = 'Myapp 😁  '; a=0;}
    else {document.title = 'Myapp alert 🆘'; a=1;}
  }, 1000);
*/
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    console.log(0);
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Great for dark mode", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Great for light mode", "success");
    }
    document.title = "MyApp " + (mode === "dark" ? "light" : "dark");
  };
  return (
    
      <>
      {/* <Router>
        <Alert alert={alert} />
        <Navbar title="myApp" secnd="abt" md={mode} togglemode={togglemode} />

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={
            <div className="container">
              <TextBox
                heading="Enter text in below given Box"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          } />
        </Routes>
      </Router> */}
<Alert alert={alert} />
<Navbar title="myApp" secnd="abt" md={mode} togglemode={togglemode} />
<div className="container">
              <TextBox
                heading="Enter text in below given Box"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
    </>
  );
}

export default App;
