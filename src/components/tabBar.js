import { Tab, Tabs } from "react-bootstrap";

const TabBar = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="page"
        id="uncontrolled-tab-example"
        className="PLACEHOLDER"
      >
        <Tab eventKey="Page 1" title=" Page 1" />
        <Tab eventKey="Page 2" title=" Page 2" />
        <Tab eventKey="Page 3" title=" Page 3" />
      </Tabs>
    </>
  );
};

export default TabBar;
