import React from "react";
import { Navbar, Tab, Tabs } from "react-bootstrap";
import LogoutButton from "../modals/logoutButton";
import Stocks from "../tabs/stocks";
const Dashboard = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Trading Terminal</Navbar.Brand>
        <Tabs>
          <Tab title="Home" eventKey={"home"} href={"/home"}>
            {/*<Home/>*/}
          </Tab>
          <Tab title="Stocks" eventKey={"stocks"} href={"/stocks"}>
            {/*<Stocks />*/}
          </Tab>
          <Tab title="Options" eventKey={"options"} href={"/options"}>
            {/*<Options />*/}
          </Tab>
        </Tabs>
        <Navbar.Text> Hello </Navbar.Text>
        <LogoutButton text={"Logout"} />
      </Navbar>
      {/*JANK*/}
      <Stocks />
    </>
  );
};

export default Dashboard;
