import { Routes, Route } from "react-router-dom";
import ApointMent from "./views/ApointMent";
import LoginScreen from "./views/LoginScreen";
import MainDashboard from "./views/MainDashboard";
import MainScreen from "./views/MainScreen";
import MobileScreen from "./views/MobileScreen";

function App() {
  // console.log(window.screen.width);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/ApointMent" element={<ApointMent />} />
        <Route path="/MainScreen" element={<MainDashboard />} />
      </Routes>
    </>
  );
}

export default App;
