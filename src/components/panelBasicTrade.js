import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const PanelBasicTrade = () => {
  const [ticker, setTicker] = useState("TEST TICKER");
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("Limit");
  const [price, setPrice] = useState(0.01);
  const [duration, setDuration] = useState("Day");

  const buyHandler = () => {};
  const sellHandler = () => {};

  useEffect(() => {});

  return (
    <>
      <section>
        <h3>{ticker}</h3>
        <h4>{quantity}</h4>
        <h4>{type}</h4>
        <h4>{price}</h4>
        <h4>{duration}</h4>
        <Button variant={"light"} onClick={buyHandler}>
          Buy
        </Button>
        <Button variant={"light"} onClick={sellHandler}>
          Sell
        </Button>
      </section>
    </>
  );
};

export default PanelBasicTrade;
