import React from "react";
import { Button, Navbar } from "react-bootstrap";
const TopBar = (props) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Trading Terminal</Navbar.Brand>
        <Navbar.Text> Hello {props.userName}</Navbar.Text>
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
