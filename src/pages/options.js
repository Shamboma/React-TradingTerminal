import NavBar from "../components/navbar";
import { Container } from "react-bootstrap";

const Options = () => {
  return (
    <Container fluid className={"Options"}>
      <NavBar userName={"Guest"} />
      <h1>Options</h1>
    </Container>
  );
};

export default Options;
