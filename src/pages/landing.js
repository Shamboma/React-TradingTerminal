import LoginButton from "../components/modals/loginButton";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Container fluid className={"Landing"}>
      <Row>
        <Col>
          <h1>Enter Terminal</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <LoginButton text={"Login"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
