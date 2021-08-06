import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import api from "../api/alpaca/config";

const PanelBasicTrade = () => {
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
    console.log(state);
  };

  const postOrders = () => {
    api
      .post("/v2/orders", {
        symbol: state.symbol,
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
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        <Form.Group className={"mb-3"}>
          <Form.Label>Ticker</Form.Label>
          <Form.Control
            type="text"
            value={state.symbol}
            onChange={changeHandler}
            id={"symbol"}
          />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            value={state.qty}
            onChange={changeHandler}
            id={"qty"}
          />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={state.price}
            className={"price"}
            onChange={changeHandler}
            id={"price"}
          />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Type</Form.Label>
          <Form.Control
            as={"select"}
            value={state.type}
            onChange={changeHandler}
            id={"type"}
          >
            <option>limit</option>
            <option>market</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Duration</Form.Label>
          <Form.Control
            as={"select"}
            value={state.time_in_force}
            onChange={changeHandler}
            id={"time_in_force"}
          >
            <option>day</option>
            <option>gtc</option>
          </Form.Control>
        </Form.Group>
        <Button variant={"light"} type={"submit"} onClick={buyHandler}>
          Buy
        </Button>
        <Button variant={"light"} type={"submit"} onClick={sellHandler}>
          Sell
        </Button>
      </Form>
    </>
  );
};

export default PanelBasicTrade;
