import { React, useContext } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./Context/AuthContext";
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
  // const { user, isAuthenticated } = useContext(AuthContext);
  // console.log("app context obj: ", {
  //   user: user,
  //   isAuth: isAuthenticated,
  // });

  return (
    <Container className="App">
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
    </Container>
  );
}

export default App;
