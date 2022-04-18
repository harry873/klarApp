import React from "react";
import { useNavigate } from "react-router-dom";
import Clock from "../components/Clock";
import "../css/loginPage.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container  d-flex">
        <div className="sideNav text-center text-white">
          <Clock/>
        </div>

        <div className="formDiv">
          <form>
            <div class="form-group">
              <input
                type="email"
                className="form-control "
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="pwd"
              />
            </div>
            <div className="loginBtn">
              <a onClick={() => navigate("/ApointMent")}>
                <img src="brandKit/Logo_white.png" alt="LOGO " />
              </a>
            </div>
          </form>
        </div>
        <div className="sideNav"></div>
      </div>
    </>
  );
};

export default LoginScreen;
