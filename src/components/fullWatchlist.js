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
      </Container>
    </>
  );
};

export default FullWatchlist;
