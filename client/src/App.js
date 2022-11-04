import "./App.css";
import { React } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasklist from "./Components/Tasklist/Tasklist";
import NewUser from "./Components/Loginform/NewUser/NewUser";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Tasklist />} />
        <Route path="/registration" element={<NewUser />} />
      </Routes>
    </Container>
  );
}

export default App;
