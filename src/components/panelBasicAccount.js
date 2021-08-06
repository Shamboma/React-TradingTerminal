import { useState } from "react";
import api from "../api/alpaca/config";

const PanelBasicAccount = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  const getAccount = () => {
    api
      .get("/v2/account")
      .then((res) => {
        setAccountInfo(res.data);
        console.log(accountInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { account_number, cash, buying_power } = accountInfo;
  return (
    <>
      <section>
        <h3>Account Number: {account_number}</h3>
        <h4>Cash: {cash}</h4>
        <h4>Buying Power {buying_power}</h4>
        <h4>Positions component</h4>
        <button onClick={getAccount}>Refresh</button>
      </section>
    </>
  );
};

export default PanelBasicAccount;
