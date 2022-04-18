import { useState, useEffect } from "react";
import MainScreen from "./MainScreen";
import MobileScreen from "./MobileScreen";
import "../css/responsive.css";

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <MainScreen />
      <MobileScreen />
    </div>
  );
};

export default MainDashboard;
