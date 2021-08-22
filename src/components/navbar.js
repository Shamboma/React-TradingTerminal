import { Button, Navbar } from "react-bootstrap";
import LogoutButton from "./modals/logoutButton";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar variant={"dark"} className={"NavBar"}>
      <Navbar.Brand>Trading Terminal</Navbar.Brand>
      <Button className={"Button"} variant="dark">
        <Link to={"/home"}>Home</Link>
      </Button>
      <Button className={"Button"} variant="dark">
        <Link to={"/stocks"}>Stocks</Link>
      </Button>
      <Button className={"Button"} variant="dark">
        <Link to={"/options"}>Options</Link>
      </Button>
      <Navbar.Text>Hello {props.userName} </Navbar.Text>
      <LogoutButton text={"Logout"} />
    </Navbar>
  );
};
export default NavBar;
