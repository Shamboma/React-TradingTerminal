import BasicAccount from "./basicAccount";
import BasicTrade from "./basicTrade";
import { Col, Container, Row } from "react-bootstrap";
import DataLevelOne from "./dataLevelOne";
import FullWatchlist from "./fullWatchlist";
import ReadOnlyChart from "./readOnlyChart";

const Page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <DataLevelOne />
          </Col>
          <Col>
            <ReadOnlyChart />
          </Col>
        </Row>
        <Row>
          <Col>
            <BasicAccount />
          </Col>
          <Col>
            <BasicTrade />
          </Col>
        </Row>
        <Row>
          <FullWatchlist />
        </Row>
      </Container>
    </>
  );
};

export default Page;
