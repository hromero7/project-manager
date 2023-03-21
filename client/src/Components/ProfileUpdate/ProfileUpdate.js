import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import UserAPI from "../../Utils/UserAPI";

function ProfileUpdate() {
  const userContextData = useContext(AuthContext);
  const [formUpdate, setFormUpdate] = useState({
    username: userContextData.user.username,
    firstname: userContextData.user.firstName,
    lastname: userContextData.user.lastName,
    email: userContextData.user.email,
  });
  const [passwordChange, setPasswordChange] = useState({
    oldPassword: "",
    newPassword: "",
    newConfirm: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const profileData = await UserAPI.editProfile(
      formUpdate,
      userContextData.user._id
    );
    console.log(`profileData: `, profileData);
  };

  const handlePasswordFormSubmit = async (e) => {
    if (passwordChange.newPassword === passwordChange.newConfirm) {
      const getUser = await UserAPI.passwordChange(
        userContextData.user._id,
        passwordChange.oldPassword,
        passwordChange.newPassword,
        passwordChange.newConfirm
      );
      console.log(`getUser: `, getUser);
    } else {
      console.log(
        `true: ${passwordChange.oldPassword} and ${passwordChange.newPassword} don't match`
      );
    }
  };

  const handleFormChange = (e) => {
    setFormUpdate({ ...formUpdate, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={formUpdate.username}
                  name="username"
                  placeholder={userContextData.user.username}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicfName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  value={formUpdate.firstName}
                  name="firstname"
                  placeholder={userContextData.user.firstName}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasiclName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  value={formUpdate.lastName}
                  name="lastname"
                  placeholder={userContextData.user.lastName}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={formUpdate.email}
                  name="email"
                  placeholder={userContextData.user.email}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  handleFormSubmit(e);
                }}
              >
                Submit
              </Button>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={passwordChange.oldPassword}
                  name="oldPassword"
                  type="text"
                  placeholder="Old password"
                  onChange={handlePasswordChange}
                />
                <Form.Control
                  value={passwordChange.newPassword}
                  name="newPassword"
                  type="text"
                  placeholder="New password"
                  onChange={handlePasswordChange}
                />
                <Form.Control
                  value={passwordChange.newConfirm}
                  name="newConfirm"
                  type="text"
                  placeholder="Confirm new password"
                  onChange={handlePasswordChange}
                />
                <Form.Check id="showPasswordCheck" label="Show password" />
              </Form.Group>
              <Button
                onClick={(e) => {
                  handlePasswordFormSubmit(e);
                }}
              >
                Change password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProfileUpdate;
