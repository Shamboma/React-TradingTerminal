import { Container, Table } from "react-bootstrap";
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
  //How I did it for accountInfo
  /*const { id, symbol, current_price, cost_basis, qty, unrealized_pl, side} = positions;*/
  return (
    <>
      <Container>
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
            <tr>
              {positions.map((position) => (
                <tr key={position.symbol}>
                  <td>{position.symbol}</td>
                  <td>{position.current_price}</td>
                  <td>{position.cost_basis}</td>
                  <td>{position.qty}</td>
                  <td>{position.unrealized_pl}</td>
                  <td>{position.side}</td>
                  <td />
                </tr>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Positions;