import BasicAccount from "../basicAccount";
import BasicTrade from "../basicTrade";
import { Col, Container, Row } from "react-bootstrap";
import DataLevelOne from "../dataLevelOne";
import FullWatchlist from "../fullWatchlist";
import ReadOnlyChart from "../readOnlyChart";

const Stocks = () => {
  return (
    <>
      <Container fluid className={"Stocks"}>
        <Row>
          <Col md={5}>
            <DataLevelOne />
          </Col>
          <Col md={2}>
            <BasicTrade />
            {/*<img src={require("../assets/hand.jpg")} />*/}
          </Col>
          <Col md={5}>
            <ReadOnlyChart />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <BasicAccount />
          </Col>
          <Col md={7}>
            <FullWatchlist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stocks;
