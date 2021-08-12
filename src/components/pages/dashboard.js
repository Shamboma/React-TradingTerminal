import React from "react";
import Stocks from "../tabs/stocks";
import NavBar from "../navbar";
const Dashboard = () => {
  return (
    <body>
      <div className={"Dashboard"}>
        <header>
          <NavBar userName={"Guest"} />
        </header>
        <body>
          <Stocks />
        </body>
      </div>
    </body>
  );
};

export default Dashboard;
