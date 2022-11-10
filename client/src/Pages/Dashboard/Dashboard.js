import React from "react";
import { Container, Button } from "react-bootstrap";
import Tasklist from "../../Components/Tasklist/Tasklist";
import UserAPI from "../../Utils/UserAPI";

const Dashboard = () => {
    const handleLogout = (e) => {
        e.preventDefault();
        UserAPI.logout().then(res => {
            console.log(res);
        });
    }

    return (
        <Container>
            <Button variant="primary" type="submit" onClick={handleLogout}>Log Out</Button>
            <Tasklist />

        </Container>
    )
}

export default Dashboard;