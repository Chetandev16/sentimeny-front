import React, { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs"
import "./App.css";
import Redirect from "./components/Redirect.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  const [screen, setScreen] = useState(false);
  const [theme, setTheme] = useState("light");
  const changeScreen = () => {
    setScreen(true);
  }
  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  if (screen) {
    return <Redirect />
  }
  return (
    <div>
      <div>
        <Navbar />
        <div className="app__main">
          <Main changeScreen={changeScreen} />
        </div>
        <div className="app_about">
          <AboutUs />
          {/* <button onClick={changeScreen} >click</button> */}
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
