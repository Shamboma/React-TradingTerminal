// import {useCallback, useMemo, useRef, useState} from "react";
// import useWebSocket, {ReadyState} from "react-use-websocket";
//
// const [socketUrl, setSocketUrl] = useState(
//     "wss://stream.data.alpaca.markets/v2/iex"
// );
// const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);
// const messageHistory = useRef([]);
//
// const connectionStatus = {
//     [ReadyState.CONNECTING]: "Connecting",
//     [ReadyState.OPEN]: "Open",
//     [ReadyState.CLOSING]: "Closing",
//     [ReadyState.CLOSED]: "Closed",
//     [ReadyState.UNINSTANTIATED]: "Uninstantiated",
// }[readyState];
// messageHistory.current = useMemo(
//     () => messageHistory.current.concat(lastMessage),
//     [lastMessage]
// );
// const handleClickSendMessage = useCallback(
//     () =>
//         sendJsonMessage({
//             action: "auth",
//             key: "PKJLAMZFMSIH693R1IFT",
//             secret: "FbJVcKZXzVpcd1i1MpNC2cmNFey6OGyRxwwaZpoS",
//         }),
//     []
// );
// const handleClickAddTicker = () =>
//     sendJsonMessage({
//         action: "subscribe",
//         dailyBars: ["SPY", "AMD"],
//     });
