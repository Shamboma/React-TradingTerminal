import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import useWebSocket from "react-use-websocket";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    sendJsonMessage({
      action: "auth",
      key: "PKJLAMZFMSIH693R1IFT",
      secret: "FbJVcKZXzVpcd1i1MpNC2cmNFey6OGyRxwwaZpoS",
    });
  }, []);

  //Websocket
  const [socketUrl] = useState("wss://stream.data.alpaca.markets/v2/iex");
  const { sendJsonMessage, lastMessage } = useWebSocket(socketUrl);
  const addTicker = (ticker) =>
    sendJsonMessage({
      action: "subscribe",
      dailyBars: [ticker.toUpperCase()],
    });

  //Pushing websocket data to watchlist and will map watchlist to table
  useEffect(() => {
    if (lastMessage == null) {
      //do nothing
    } else setWatchlist([...watchlist, lastMessage.data]);
    console.log(watchlist);
  }, [lastMessage]);

  //Adding ticker to watchlist
  const [watchlistTicker, setWatchlistTicker] = useState("");
  const changeHandler = (e) => {
    const value = e.target.value;
    setWatchlistTicker(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTicker(watchlistTicker);
  };

  return (
    <>
      <Table bordered hover className={"Table"}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Fill"</td>
            <td>"Fill"</td>
          </tr>
        </tbody>
      </Table>

      <Form>
        <Form.Group>
          <Form.Control
            value={watchlistTicker.toUpperCase()}
            onChange={changeHandler}
            id={"symbol"}
            placeholder={"Symbol"}
          />
        </Form.Group>
        <Button
          onClick={submitHandler}
          type={"submit"}
          className={"Button"}
          variant={"dark"}
        >
          Add to watchlist
        </Button>
      </Form>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
    </>
  );
};

export default Watchlist;

//For future when I add watchlists from the exchange.
// const getWatchlists = () => {
//   api
//     .get("/v2/watchlists")
//     .then((res) => {
//       setWatchlists(res.data);
//       console.log(watchlists);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// //Viewing main watchlist of test account
// const viewWatchlist = () => {
//   api
//     .get("/v2/watchlists/af4110d2-5aac-485d-9b60-fcccaaf9adb4")
//     .then((res) => {
//       setWatchlist(res.data.assets);
//       console.log(watchlist);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// //I think this is deleting because axios is not differentiating path vs body variables
// const addToWatchlist = () => {
//   api
//     .put("/v2/watchlists/af4110d2-5aac-485d-9b60-fcccaaf9adb4", {
//       symbol: "COIN",
//     })
//     .then(function (res) {
//       console.log(res);
//     })
//     .catch(function (error) {});
// };
