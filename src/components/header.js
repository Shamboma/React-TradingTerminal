import React from "react";
import { Button, Nav, Navbar, Tab, Tabs } from "react-bootstrap";
import LogoutButton from "./modals/logoutButton";
const Header = (props) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Trading Terminal</Navbar.Brand>
        {/*<Tabs>
          <Tab title="Home" eventKey={"home"} href={"/home"}></Tab>
          <Tab title="Stocks" eventKey={"stocks"} href={"/stocks"}>
            <Stocks />
          </Tab>
          <Tab title="Options" eventKey={"options"} href={"/options"}></Tab>
        </Tabs>*/}
        <Nav variant="tabs">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/stocks">Stocks</Nav.Link>
          <Nav.Link href="/options">Options</Nav.Link>
        </Nav>
        <Navbar.Text> Hello {props.userName}</Navbar.Text>
        <LogoutButton text={"Logout"} />
      </Navbar>
    </>
  );
};

export default Header;
