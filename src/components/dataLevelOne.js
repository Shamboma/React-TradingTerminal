import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const DataLevelOne = () => {
  const [ticker, setTicker] = useState("TEST TICKER");
  const [price, setPrice] = useState(0.1);
  const [high, setHigh] = useState(0.1);
  const [low, setLow] = useState(0.1);
  const [open, setOpen] = useState(0.1);
  const [prevClose, setPrevClose] = useState(0.1);
  const [volume, setVolume] = useState(0);
  const [avgVolume, setAvgVolume] = useState(0);

  const [dataOne, setDataOne] = useState([
    [1, 2, 3, 4, 5],
    [11, 22, 33, 44, 55],
    [111, 222, 333, 444, 555],
  ]);

  //Get incoming price, time, size and update values, add to array to display in table with limit of 3 in array
  useEffect(() => {});

  return (
    <>
      <Container fluid>
        <Row>
          <Col>{ticker}</Col>
          <Col>{price}</Col>
        </Row>
        <Row>
          <Col>High {high}</Col>
          <Col>Low {low}</Col>
        </Row>
        <Row>
          <Col>Open {open}</Col>
          <Col>Prev. Close {prevClose}</Col>
        </Row>
        <Row>
          <Col>Volume {volume}</Col>
          <Col>Avg. Volume {avgVolume}</Col>
        </Row>
        <Row>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Price</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataOne[0][0]}</td>
                <td>{dataOne[1][0]}</td>
                <td>{dataOne[2][0]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][1]}</td>
                <td>{dataOne[1][1]}</td>
                <td>{dataOne[2][1]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
              <tr>
                <td>{dataOne[0][2]}</td>
                <td>{dataOne[1][2]}</td>
                <td>{dataOne[2][2]}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default DataLevelOne;
