import BasicAccount from "./basicAccount";
import BasicTrade from "./basicTrade";
import { Col, Container, Row } from "react-bootstrap";
import DataLevelOne from "./dataLevelOne";
import FullWatchlist from "./fullWatchlist";
import PanelreadChart from "./readOnlyChart";

const Page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BasicAccount />
          </Col>
          <Col>
            <BasicTrade />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataLevelOne />
          </Col>
        </Row>
        <Row>
          <Col>
            <FullWatchlist />
          </Col>
        </Row>
        <Row>
          <Col>
            <PanelreadChart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;
