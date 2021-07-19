import TopBar from "./components/topBar";
import Page from "./components/page";
import TabBar from "./components/tabBar";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <TopBar />
      </header>
      <body className="Dashboard-body">
        <Page />
      </body>
      <footer className="Dashboard-footer">
        <TabBar />
      </footer>
    </div>
  );
}

export default Dashboard;
