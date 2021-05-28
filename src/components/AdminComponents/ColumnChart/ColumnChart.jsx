import { Column } from "@ant-design/charts";
import { Card } from "antd";
import React from "react";
const data = [
  {
    type: "1",
    sales: 38,
  },
  {
    type: "2",
    sales: 52,
  },
  {
    type: "3",
    sales: 0,
  },
  {
    type: "4",
    sales: 145,
  },
  {
    type: "5",
    sales: 48,
  },
  {
    type: "6",
    sales: 38,
  },
  {
    type: "7",
    sales: 38,
  },
  {
    type: "8",
    sales: 38,
  },
];

const config = {
  data,
  height: 350,
  xField: "type",
  yField: "sales",
  label: {
    position: "middle",
    style: {
      fill: "#FFFFFF",
      opacity: 0.6,
    },
  },
  meta: {
    type: { alias: "type" },
    sales: { alias: "sales" },
  },
};
const ColumnChart = () => {
  return (
    <Card className="h-full">
      <div className="mb-8">
        <h1 className="title font-semibold text-xl mb-10">Published Book</h1>
      </div>
      <Column {...config} />
    </Card>
  );
};

export default ColumnChart;
