import { useState } from "react";
import api from "../api/alpaca/config";
import { Button, Col, Container, Row } from "react-bootstrap";

const BasicAccount = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  const getAccount = () => {
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
      <Container>
        <Row>
          <Col>Account: {account_number}</Col>
          <Col>
            <Button variant={"light"} onClick={getAccount}>
              Load
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>Cash: {cash}</Col>
          <Col>Buying Power: {buying_power}</Col>
        </Row>
        <Row>
          <Col>Positions component</Col>
        </Row>
      </Container>
    </>
  );
};

export default BasicAccount;
