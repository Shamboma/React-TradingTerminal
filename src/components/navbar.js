import { Navbar, Tab, Tabs } from "react-bootstrap";
import LogoutButton from "./modals/logoutButton";
import React from "react";

const NavBar = (props) => {
  return (
    <Navbar variant={"dark"} className={"NavBar"}>
      <Navbar.Brand>Trading Terminal</Navbar.Brand>
      <Tabs className={"Tabs"}>
        <Tab title="Home" eventKey={"home"}>
          {/*<Home/>*/}
        </Tab>
        <Tab title="Stocks" eventKey={"stocks"}>
          {/*<Stocks />*/}
        </Tab>
        <Tab title="Options" eventKey={"options"}>
          {/*<Options />*/}
        </Tab>
      </Tabs>
      <Navbar.Text> Hello {props.userName} </Navbar.Text>
      <LogoutButton text={"Logout"} />
    </Navbar>
  );
};
export default NavBar;
