import AccountInfo from "../components/accountInfo";
import Trade from "../components/trade";
import { Col, Container, Row } from "react-bootstrap";
import DataLevelOne from "../components/dataLevelOne";
import Watchlist from "../components/watchlist";
import Chart from "../components/chart";
import NavBar from "../components/navbar";

const Stocks = () => {
  return (
    <Container fluid className={"Stocks"}>
      <Row>
        <NavBar userName="Guest" />
      </Row>
      <Row>
        <Col md={5}>
          <DataLevelOne />
        </Col>
        <Col md={2}>
          <Trade />
          {/*<img src={require("../assets/hand.jpg")} />*/}
        </Col>
        <Col md={5}>
          <Chart />
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <AccountInfo />
        </Col>
        <Col md={7}>
          <Watchlist />
        </Col>
      </Row>
    </Container>
  );
};

export default Stocks;
