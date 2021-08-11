import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>Trading terminal</h1>
      <Link to="/dashboard">Login</Link>
    </>
  );
};

export default Landing;
