import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const LogoutButton = (props) => {
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
          <Modal.Title>Time to Go!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/">
            <Button className={"Button"} variant="dark">
              Logout
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default LogoutButton;
