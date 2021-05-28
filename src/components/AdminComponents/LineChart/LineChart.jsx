import { Card, Rate } from "antd";
import React from "react";
import { Line } from "@ant-design/charts";
const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

const config = {
  data,
  height: 200,
  xField: "year",
  yField: "value",
  point: {
    size: 4,
    shape: "diamond",
  },
};
const LineChart = () => {
  return (
    <Card className="h-full">
      <div className="mb-8">
        <h1 className="title font-semibold text-xl mb-10">Overall Rating</h1>
        <div className="flex flex-row justify-between items-center">
          <p className="text-5xl mb-9">4.5</p>
          <div className="star">
            <Rate allowHalf defaultValue={4.5} />
          </div>
        </div>
        <p className="text-lg font-semibold ">
          <span className="text-blue-500">+1.5</span> point from last month
        </p>
      </div>
      <Line {...config} />
    </Card>
  );
};

export default LineChart;
