import api from "../config";
const getAccount = () => {
  api
    .get("/v2/account")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAccount;
