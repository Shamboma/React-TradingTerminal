import { useEffect, useState } from "react";
import getAccount from "../api/alpaca/getAccount";

const PanelBasicAccount = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    getAccount();
    console.log(accountInfo);
  }, []);

  return (
    <>
      <section>
        <h3>Account Info</h3>
        <h4>Cash</h4>
        <h4>Buying Power</h4>
        <h4>Portfolio component</h4>
      </section>
    </>
  );
};

export default PanelBasicAccount;
