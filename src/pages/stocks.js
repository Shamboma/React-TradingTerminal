import BasicAccount from "../components/basicAccount";
import BasicTrade from "../components/basicTrade";
import { Col, Container, Row } from "react-bootstrap";
import DataLevelOne from "../components/dataLevelOne";
import FullWatchlist from "../components/fullWatchlist";
import ReadOnlyChart from "../components/readOnlyChart";
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
  );
};

export default Stocks;
