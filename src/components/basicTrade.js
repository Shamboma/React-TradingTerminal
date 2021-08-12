import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import api from "../api/alpaca/config";

const BasicTrade = () => {
  const [state, setState] = useState({
    symbol: "coin",
    side: "buy",
    qty: "1",
    type: "limit",
    price: "0.01",
    time_in_force: "day",
  });

  const buyHandler = (e) => {
    e.preventDefault();
    setState({ ...state, side: "buy" });
    postOrders();
  };
  const sellHandler = (e) => {
    e.preventDefault();
    setState({ ...state, side: "sell" });
    postOrders();
  };

  const changeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setState({ ...state, [id]: value });
  };

  const postOrders = () => {
    api
      .post("/v2/orders", {
        symbol: state.symbol.toUpperCase(),
        qty: state.qty,
        side: state.side,
        type: state.type,
        time_in_force: state.time_in_force,
        limit_price: state.price,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        //Create modal for error3
        /*errorModal(error);*/
      });
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className={"mb-2"} as={Row}>
            <Form.Label column sm="3">
              Ticker
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                value={state.symbol.toUpperCase()}
                onChange={changeHandler}
                id={"symbol"}
                size="sm"
                maxLength="4"
              />
            </Col>
          </Form.Group>
          <Form.Group className={"mb-2"} as={Row}>
            <Form.Label column sm="3">
              Quantity
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                value={state.qty}
                onChange={changeHandler}
                id={"qty"}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group className={"mb-2"} as={Row}>
            <Form.Label column sm="3">
              Price
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                value={state.price}
                className={"price"}
                onChange={changeHandler}
                id={"price"}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group className={"mb-2"} as={Row}>
            <Form.Label column sm="3">
              Type
            </Form.Label>
            <Col>
              <Form.Control
                as={"select"}
                value={state.type}
                onChange={changeHandler}
                id={"type"}
                size="sm"
              >
                <option>limit</option>
                <option>market</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group className={"mb-2"} as={Row}>
            <Form.Label column sm="3">
              Duration
            </Form.Label>
            <Col>
              <Form.Control
                as={"select"}
                value={state.time_in_force}
                onChange={changeHandler}
                id={"time_in_force"}
                size="sm"
              >
                <option>day</option>
                <option>gtc</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Button
            className={"Button"}
            variant={"dark"}
            type={"submit"}
            onClick={buyHandler}
          >
            Buy
          </Button>
          <Button
            className={"Button"}
            variant={"dark"}
            type={"submit"}
            onClick={sellHandler}
          >
            Sell
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default BasicTrade;
