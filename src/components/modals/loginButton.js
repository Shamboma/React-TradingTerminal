import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const LoginButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={"Button"} variant="dark" onClick={handleShow}>
        {props.text}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pick Your Exchange</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/stocks">
            <Button className={"Button"} variant="dark">
              Test
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default LoginButton;
