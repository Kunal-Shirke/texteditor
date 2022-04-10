import logo from "./logo.svg";
import "./App.css";
import Navbar_s from "./components/Navbar_s";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
//import About from "./components/About";
//import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `#1d1e20`;
      showAlert("DARK MODE", "success");
      document.title = `TextEditor-DarkMode`;
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("LIGHT MODE", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar_s
          title="Text Editor"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar_s>
        <Alerts alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />

            <Route
              path="/"
              element={*/}
                <TextForm
                  showAlert={showAlert}
                  heading="Type Here..."
                  mode={mode}
                />
              {/* }
            />
          </Routes>{" "}  */}
        </div>
     {/* </> </Router> */}
    </>
  );
}

export default App;
