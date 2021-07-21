import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const PanelDataLevelOne = () => {
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

  //Get incoming price, time, size and update values, add to array to display in table with limit of 5 in array
  useEffect(() => {});

  return (
    <>
      <section>
        <h3>{ticker}</h3>
        <h4>{price}</h4>
        <h4>High {high}</h4>
        <h4>Low {low}</h4>
        <h4>Open {open}</h4>
        <h4>Prev. Close {prevClose}</h4>
        <h4>Volume {volume}</h4>
        <h4>Avg. Volume {avgVolume}</h4>
        <Table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{dataOne[0][0]}</th>
              <th>{dataOne[1][0]}</th>
              <th>{dataOne[2][0]}</th>
            </tr>
            <tr>
              <th>{dataOne[0][1]}</th>
              <th>{dataOne[1][1]}</th>
              <th>{dataOne[2][1]}</th>
            </tr>
            <tr>
              <th>{dataOne[0][2]}</th>
              <th>{dataOne[1][2]}</th>
              <th>{dataOne[2][2]}</th>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default PanelDataLevelOne;
