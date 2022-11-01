import "./App.css";
import { React } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Components/Task/Task";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Task />} />
      </Routes>
    </Container>
  );
}

export default App;
