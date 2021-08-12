import { useEffect, useState } from "react";
import api from "../api/alpaca/config";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/index.css";
import Positions from "./positions";
import getPositions from "../api/alpaca/get/getPositions";

const BasicAccount = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = () => {
    getPositions();
    api
      .get("/v2/account")
      .then((res) => {
        setAccountInfo(res.data);
        console.log(accountInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { account_number, cash, buying_power } = accountInfo;
  return (
    <>
      <Container className={"BasicAccount"}>
        <Row>
          <Col>Account: {account_number}</Col>
          <Col>
            <Button className={"Button"} variant={"dark"} onClick={getAccount}>
              Load
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>Cash: {cash}</Col>
          <Col>Buying Power: {buying_power}</Col>
        </Row>
        <Row>
          <Positions />
        </Row>
      </Container>
    </>
  );
};

export default BasicAccount;
