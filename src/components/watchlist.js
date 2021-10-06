import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useWebSocket, { ReadyState } from "react-use-websocket";
import api from "../api/alpaca/config";

const Watchlist = () => {
  const [watchlists, setWatchlists] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const getWatchlists = () => {
    api
      .get("/v2/watchlists")
      .then((res) => {
        setWatchlists(res.data);
        console.log(watchlists);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewWatchlist = () => {
    api
      .get("/v2/watchlists/af4110d2-5aac-485d-9b60-fcccaaf9adb4")
      .then((res) => {
        setWatchlist(res.data.assets);
        console.log(watchlist);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //I think this is deleting because axios is not differentiating path vs body variables
  const addToWatchlist = () => {
    api
      .put("/v2/watchlists/af4110d2-5aac-485d-9b60-fcccaaf9adb4", {
        symbol: "COIN",
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {});
  };

  //Websocket
  const [socketUrl, setSocketUrl] = useState(
    "wss://stream.data.alpaca.markets/v2/iex"
  );
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const messageHistory = useRef([]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage]
  );
  useEffect(
    () =>
      sendJsonMessage({
        action: "auth",
        key: "PKJLAMZFMSIH693R1IFT",
        secret: "FbJVcKZXzVpcd1i1MpNC2cmNFey6OGyRxwwaZpoS",
      }),
    []
  );
  const handleClickAddTicker = () =>
    sendJsonMessage({
      action: "subscribe",
      dailyBars: ["SPY", "AMD"],
    });

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
      <Button
        onClick={handleClickAddTicker}
        className={"Button"}
        variant={"dark"}
      >
        Add Ticker to websocket
      </Button>
      <Button onClick={viewWatchlist} className={"Button"} variant={"dark"}>
        Get Watchlist
      </Button>
      <Button onClick={addToWatchlist} className={"Button"} variant={"dark"}>
        Add to watchlist
      </Button>

      <span>{connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
    </>
  );
};

export default Watchlist;
