import { Button, Navbar } from "react-bootstrap";
import LogoutButton from "./modals/logoutButton";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar variant={"dark"} className={"NavBar"}>
      <Navbar.Brand>Trading Terminal</Navbar.Brand>
      <Link to={"/home"}>
        {" "}
        <Button className={"Button"} variant="dark">
          Home
        </Button>
      </Link>
      <Link to={"/stocks"}>
        <Button className={"Button"} variant="dark">
          Stocks
        </Button>
      </Link>
      <Link to={"/options"}>
        <Button className={"Button"} variant="dark">
          Options
        </Button>
      </Link>
      <Navbar.Text>Hello {props.userName} </Navbar.Text>
      <LogoutButton text={"Logout"} />
    </Navbar>
  );
};
export default NavBar;
