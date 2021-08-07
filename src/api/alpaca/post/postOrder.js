const axios = require("axios");
const postOrders = () => {
  axios
    .post("/v2/orders", {
      symbol: "",
      qty: "",
      notional: "",
      side: "",
      type: "",
      time_in_force: "",
      limit_price: "",
      stop_price: "",
      trail_price: "",
      trail_percent: "",
      extended_hours: "",
      client_order_id: "",
      order_class: "",
      take_profit: "",
      stop_loss: "",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default postOrders;
