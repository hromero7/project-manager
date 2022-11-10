import "./App.css";
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

function App() {
  const { user, isAuthenticated } = useContext(AuthContext);
  console.log(user);

  return (

    <Container className="App">
      <NavBar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Container>

  );
}

export default App;
