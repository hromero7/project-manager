import "./App.css";
import { React } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasklist from "./Components/Tasklist/Tasklist";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Tasklist />} />
      </Routes>
    </Container>
  );
}

export default App;
