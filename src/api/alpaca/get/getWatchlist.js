import api from "../config";
const getWatchlists = () => {
  api
    .get("/v2/watchlists")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getWatchlists;
