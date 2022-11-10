import React from "react";
import { Container } from "react-bootstrap";
import Loginform from "../../Components/Loginform/Loginform";
import "./Login.css";

const LoginPage = () => {
    return (
        <Container className="login-container">
            <h1>Sign in</h1>
            <Loginform />
        </Container>
        
    )
}

export default LoginPage;