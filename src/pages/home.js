import NavBar from "../components/navbar";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className={"Home"}>
      <NavBar userName={"Guest"} />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
