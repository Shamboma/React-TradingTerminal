import api from "../config";
const getOrders = () => {
  api
    .get("/v2/orders")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getOrders;
