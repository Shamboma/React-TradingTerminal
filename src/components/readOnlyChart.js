import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";
import { Col, Container } from "react-bootstrap";

function ReadOnlyChart() {
  const ref = React.useRef();

  useEffect(() => {
    const chart = createChart(ref.current, { width: 600, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-21", value: 74.43 },
      { time: "2019-04-22", value: 74.43 },
      { time: "2019-04-23", value: 74.43 },
      { time: "2019-04-24", value: 74.43 },
      { time: "2019-04-25", value: 74.43 },
      { time: "2019-04-26", value: 74.43 },
      { time: "2019-04-27", value: 74.43 },
    ]);
  }, []);

  return (
    <>
      <Container>
        <Col ref={ref} />
      </Container>
    </>
  );
}

export default ReadOnlyChart;
