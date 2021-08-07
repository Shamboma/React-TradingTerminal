import api from "../config";
const getPositions = () => {
  api
    .get("/v2/positions")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getPositions;
