import { useState } from "react";
import { Table } from "react-bootstrap";

const PanelFullWatchlist = () => {
  const [watchlist, setwatchlist] = useState([
    ["Coin", "V", "GME"],
    [1, 2, 3],
  ]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{watchlist[0][0]}</th>
            <th>{watchlist[1][0]}</th>
          </tr>
          <tr>
            <th>{watchlist[0][1]}</th>
            <th>{watchlist[1][1]}</th>
          </tr>
          <tr>
            <th>{watchlist[0][2]}</th>
            <th>{watchlist[1][2]}</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PanelFullWatchlist;
