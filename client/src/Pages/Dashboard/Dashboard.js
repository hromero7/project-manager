import { React, useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import Tasklist from "../../Components/Tasklist/Tasklist";
import UserAPI from "../../Utils/UserAPI";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    if (loggedOut) {
      return navigate("/");
    }
  });

  const handleLogout = (e) => {
    UserAPI.logout().then((res) => {
      if (res.isAuthenticated === false) {
        localStorage.removeItem("authenticated");
        setLoggedOut(true);
        auth.isAuthenticated = false;
      }
    });
  };

  return (
    <Container>
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          handleLogout(e);
          console.log("auth", auth);
        }}
      >
        Log Out
      </Button>
      <Tasklist />
    </Container>
  );
};

export default Dashboard;
