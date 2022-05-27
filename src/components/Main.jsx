import { Button } from "@mui/material";
import React from "react";
import "./main.css";
import analytics from "./img/analytics.png";
import { auth, provider } from "../fire";
import swal from "sweetalert";
const Main = ({changeScreen}) => {
  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        swal("Done!", "Login Successful!!", "success");
        // console.log("done");
        changeScreen();
      })
      .catch((error) => {
        swal("Failed!", `${error.message}`, "error");
      });

    // setUser(true);
  };
  return (
    <div className="main__container">
      <div className="main__text">
        <p className="main__p1">Welcome to Sentiment Analyzer</p>
        <p className="main__p2">Created with Python,Streamlit and ReactJS</p>
        <Button
          variant="contained"
          style={{ backgroundColor: "orange", padding: "5px 30px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <div className="main__img floating">
        <img src={analytics} alt="" />
      </div>
    </div>
  );
};

export default Main;
