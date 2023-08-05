import React, { useState } from "react";
import "../styles/Navbar.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegjsterDialog";
import { YoutubeSearchedForOutlined } from "@mui/icons-material";
import axios from "axios";

export default function Navbar(props) {
  const [logindata, setlogindata] = useState(false);
  const [autData, setAuthData] = useState({});
  const [open, setopen] = useState(false);
  const [openRegister, setopenRegister] = useState(false);
  const navigation = useNavigate();

  const handlelink = (path) => {
    window.location.href = path;
  };

  const handleOpenDialog = () => {
    setopen(true);
  };

  const handleCloseDialog = () => {
    setopen(false);
  };

  const handleRegisterDialog = () => {
    setopenRegister(true);
  };

  const handleCloseRegisrDiag = () => {
    setopenRegister(false);
  };

  const handleChange = (e) => {
    setAuthData({
      ...autData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    axios({
      url: window.$api+"/login",
      method: "POST",
      data: autData,
    }).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        props.setAvatarLetter (res.data.data.user.username.charAt(0).toUpperCase());
        localStorage.setItem("token", res.data.data.token);
        props.setIsLoggedIn(true);
        setopen(false);
      } else {
        alert(res.data.message);
      }
    });
  };

  const handleRegister = () => {
    axios({
      url: window.$api+"/register",
      method: "POST",
      data: autData,
    }).then((res) => {
      // console.log(res.data);
    });
  };

  return (
    <div className="navbarcontainer">
      <div className="logo">
        <h1>WISTIA</h1>
      </div>

      <div className="menu">
        <div className="menuItem">
          <p>Product</p>
          <i className="fa fa-angle-down"></i>
        </div>

        <div className="menuItem">
          <p>Learning center</p>
          <i className="fa fa-angle-down"></i>
        </div>

        <div className="menuItem">
          <p>Original Series</p>
          <i className="fa fa-angle-down"></i>
        </div>

        <div className="menuItem">
          <p onClick={() => handlelink("/aoboutus")}>About</p>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>

      {!props.isLoggedIn ? (
        <div className="button">
          <button onClick={handleOpenDialog} className="loginButtonStyle">
            Login
          </button>
          <button
            onClick={handleRegisterDialog}
            className="getStartButtonStyle"
          >
            Cancfl
          </button>
        </div>
      ) : (
        <Avatar
          sx={{
            cursor: "pointer",
          }}
          onClick={() => handlelink("/profile")}
        >
          {props.avatarLetter}
        </Avatar>
      )}
      <div className="navbarIcon">
        <MenuIcon />
      </div>

      <LoginDialog
        open={open}
        handleCloseDialog={handleCloseDialog}
        handleChange={handleChange}
        handleLogin={handleLogin}
      />

      <RegisterDialog
        open={openRegister}
        handleCloseRegisrDiag={handleCloseRegisrDiag}
        handleRegister={handleRegister}
        handleChange={handleChange}
      />
    </div>
  );
}
