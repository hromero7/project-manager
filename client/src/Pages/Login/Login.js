import React from "react";
import { Container } from "react-bootstrap";
import Loginform from "../../Components/Loginform/Loginform";
import "./Login.css";

const LoginPage = () => {
    return (
        <Container className="login-container">
            <p>Log in to your account</p>
            <Loginform />
        </Container>
        
    )
}

export default LoginPage;