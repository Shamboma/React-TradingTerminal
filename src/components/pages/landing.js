import LoginButton from "../modals/loginButton";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <body>
        <Container className={"Landing"}>
          <Row>
            <Col>Enter Terminal</Col>
            <Col>
              <LoginButton text={"Login"} />
            </Col>
          </Row>
        </Container>
      </body>
    </>
  );
};

export default Landing;
