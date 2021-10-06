import { useState } from "react";
import { Table } from "react-bootstrap";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    ["Coin", "V", "GME"],
    [1, 2, 3],
  ]);

  return (
    <Table bordered hover className={"Table"}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Last</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{watchlist[0][0]}</td>
          <td>{watchlist[1][0]}</td>
        </tr>
        <tr>
          <td>{watchlist[0][1]}</td>
          <td>{watchlist[1][1]}</td>
        </tr>
        <tr>
          <td>{watchlist[0][2]}</td>
          <td>{watchlist[1][2]}</td>
        </tr>
        <tr>
          <td>{watchlist[0][2]}</td>
          <td>{watchlist[1][2]}</td>
        </tr>
        <tr>
          <td>{watchlist[0][2]}</td>
          <td>{watchlist[1][2]}</td>
        </tr>
        <tr>
          <td>{watchlist[0][2]}</td>
          <td>{watchlist[1][2]}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Watchlist;