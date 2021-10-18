import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Button className={"Button"} variant="dark" onClick={loginWithRedirect}>
        {props.text}
      </Button>
    </>
  );
};
export default LoginButton;
