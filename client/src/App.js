import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import LandingPage from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/Login/Login";
import NavBar from "./Components/Navbar/Navbar";
import Whoops from "./Pages/PNF/Whoops";
import TaskPage from "./Pages/TaskPage/TaskPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-fail" element={<Whoops />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:ID" element={<TaskPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
