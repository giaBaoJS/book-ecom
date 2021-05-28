import { Col, Row } from "antd";
import React from "react";
import ColumnChart from "../ColumnChart/ColumnChart";
import LineChart from "../LineChart/LineChart";
import ProcessChart from "../ProcessChart/ProcessChart";

const MultiChart = () => {
  return (
    <Row gutter={16} style={{ height: 480 }}>
      <Col span={6} className="h-full">
        <LineChart />
      </Col>
      <Col span={12} className="h-full">
        <ColumnChart />
      </Col>
      <Col span={6} className="h-full">
        <ProcessChart />
      </Col>
    </Row>
  );
};

export default MultiChart;
