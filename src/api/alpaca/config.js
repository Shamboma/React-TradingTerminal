const axios = require("axios");

const api = axios.create({
  baseURL: "https://paper-api.alpaca.markets",
  headers: {
    "APCA-API-KEY-ID": "PKJLAMZFMSIH693R1IFT",
    "APCA-API-SECRET-KEY": "FbJVcKZXzVpcd1i1MpNC2cmNFey6OGyRxwwaZpoS",
  },
});

export default api;
