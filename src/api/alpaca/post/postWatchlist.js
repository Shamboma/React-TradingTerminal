const axios = require("axios");
const postWatchlist = () => {
  axios
    .post("/v2/watchlists", {
      name: "",
      symbols: "",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default postWatchlist;
