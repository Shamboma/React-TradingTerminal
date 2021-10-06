import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../api/alpaca/config";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    getPositions();
  }, []);

  const getPositions = () => {
    api
      .get("/v2/positions")
      .then((res) => {
        setPositions(res.data);
        console.log(positions);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /*const { id, symbol, current_price, cost_basis, qty, unrealized_pl, side} = positions;*/
  return (
    <>
      <Table bordered hover className={"Table"}>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Basis</th>
            <th>Current</th>
            <th>Quantity</th>
            <th>Unrealized P&L</th>
            <th>Side</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.symbol}>
              <td>{position.symbol}</td>
              <td>{position.avg_entry_price}</td>
              <td>{position.current_price}</td>
              <td>{position.qty}</td>
              <td>{position.unrealized_pl}</td>
              <td>{position.side}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className={"Button"} variant={"dark"} onClick={getPositions}>
        Load
      </Button>
    </>
  );
};

export default Positions;
