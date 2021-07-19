import React, { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
const TopBar = () => {
  const [userName, setUserName] = useState("User");
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Trading Terminal</Navbar.Brand>
        <Navbar.Text> Hello {userName}</Navbar.Text>
        <Button variant="light" onClick={loginHandler}>
          Login
        </Button>
        <Button variant="light" onClick={logoutHandler}>
          Logout
        </Button>
      </Navbar>
    </>
  );
};

export default TopBar;
