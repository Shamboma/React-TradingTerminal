import Header from "./components/header";
import Page from "./components/page";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <Header userName="User" />
      </header>
      <body className="Dashboard-body">
        <Page />
      </body>
      <footer className="Dashboard-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
