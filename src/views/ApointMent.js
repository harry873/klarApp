import React, { useState, useEffect } from "react";
import "../css/loginPage.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../css/apointment.css";
import { useNavigate } from "react-router-dom";
import Clock from "../components/Clock";
const ApointMent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container d-flex">
        <div className="sideNav text-center text-white">
          <Clock />
        </div>

        <div className="formDiv ">
          <div className="text-center apointDiv">
            <p>
              My next Appointment is
              <span sx={{ fontSize: "3rem" }}>60min</span>
            </p>
            <form>
              <div class="form-group">
                <input
                  type="range"
                  class="form-control-range"
                  name="range"
                  min={0}
                  max={100}
                />
              </div>
            </form>
            <p>and it start at</p>
            <form className="slectform">
              <div class="form-group ">
                <select class="form-control" id="sel1">
                  <option>Now</option>
                  <option>Later</option>
                  <option>After</option>
                </select>
              </div>
            </form>
            <div className="loginBtn mt-3">
              <a onClick={() => navigate("/MainScreen")}>
                <img src="brandKit/Logo_white.png" alt="LOGO " />
              </a>
            </div>
            <div>
              <ArrowUpwardIcon sx={{ fontSize: 35 }} />
            </div>
            <p className="text-muted">Touch to continue</p>
          </div>
        </div>
        <div className="sideNav"></div>
      </div>
    </>
  );
};

export default ApointMent;
