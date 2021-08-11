import Stocks from "./components/pages/stocks";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <Header userName="User" />
      </header>
      <body className="Dashboard-body">
        <Stocks />
      </body>
    </div>
  );
}

export default Dashboard;
