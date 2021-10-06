import { useEffect, useState } from "react";
import api from "../api/alpaca/config";
import { Button, Col, Row } from "react-bootstrap";
import Positions from "./positions";

const AccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    getAccount();
  }, []);

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
    <article className={"AccountInfo"}>
      <Row>
        <Col>
          <h3>Account: {account_number}</h3>
        </Col>
        <Col>
          <Button className={"Button"} variant={"dark"} onClick={getAccount}>
            Load
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Cash: {cash}</h4>
        </Col>
        <Col>
          <h4>Buying Power: {buying_power}</h4>
        </Col>
      </Row>
      <Row>
        <Positions />
      </Row>
    </article>
  );
};

export default AccountInfo;
