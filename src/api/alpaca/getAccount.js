import api from "./config";

const getAccount = () => {
  api.get("/v2/account").then((response) => {
    console.log(response);
  });
};

export default getAccount;
