import LoginButton from "../modals/loginButton";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <Container fluid className={"Landing"}>
        <Row>
          <Col>Enter Terminal</Col>
        </Row>
        <Row>
          <Col>
            <LoginButton text={"Login"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
