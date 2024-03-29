import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import LandingPage from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import Whoops from "./Pages/PNF/Whoops";
import TaskPage from "./Pages/TaskPage/TaskPage";
import "./App.css";
import { AuthContext } from "./Context/AuthContext";
import DashNav from "./Components/DashNav/DashNav";
import AIForms from "./Components/AIForm/AIForms";

function App() {
  const auth = useContext(AuthContext);
  return (
    <div data-testid="app" className="App">
      {auth.isAuthenticated ? <DashNav /> : ""}
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-fail" element={<Whoops />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<AIForms />} />
          <Route path="/editprofile" element={<Settings />} />
          <Route path="/project/:ID" element={<TaskPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
