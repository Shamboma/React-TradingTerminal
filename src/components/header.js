import React from "react";
import { Button, Navbar, Tab, Tabs } from "react-bootstrap";
const Header = (props) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Trading Terminal</Navbar.Brand>
        <Tabs
          defaultActiveKey="page"
          id="uncontrolled-tab-example"
          className="PLACEHOLDER"
        >
          <Tab eventKey="Home" title="Home" />
          <Tab eventKey="Stocks" title="Stocks" />
          <Tab eventKey="Options" title="Options" />
        </Tabs>
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

export default Header;
