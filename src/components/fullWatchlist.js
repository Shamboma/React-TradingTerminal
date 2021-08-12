import { useState } from "react";
import { Container, Table } from "react-bootstrap";

const FullWatchlist = () => {
  const [watchlist, setwatchlist] = useState([
    ["Coin", "V", "GME"],
    [1, 2, 3],
  ]);

  return (
    <>
      <Container>
        <Table bordered hover className={"Table"}>
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
            <tr>
              <th>{watchlist[0][2]}</th>
              <th>{watchlist[1][2]}</th>
            </tr>
            <tr>
              <th>{watchlist[0][2]}</th>
              <th>{watchlist[1][2]}</th>
            </tr>
            <tr>
              <th>{watchlist[0][2]}</th>
              <th>{watchlist[1][2]}</th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default FullWatchlist;
