import PanelBasicAccount from "./panelBasicAccount";
import PanelBasicTrade from "./panelBasicTrade";
import { Col, Container, Row } from "react-bootstrap";
import PanelDataLevelOne from "./panelDataLevelOne";
import PanelFullWatchlist from "./panelFullWatchlist";

const Page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <PanelBasicAccount />
          </Col>
          <Col>
            <PanelBasicTrade />
          </Col>
        </Row>
        <Row>
          <Col>
            <PanelDataLevelOne />
          </Col>
        </Row>
        <Row>
          <Col>
            <PanelFullWatchlist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;
