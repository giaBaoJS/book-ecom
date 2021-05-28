import { Card, Progress } from "antd";
import React from "react";

const ProcessChart = () => {
  return (
    <Card className="h-full">
      <div
        className="flex flex-col justify-between items-center pb-5"
        style={{ height: 420 }}
      >
        <h1 className="title font-semibold text-xl ">Monthly Target</h1>
        <Progress type="circle" percent={75} />
        <p className="title font-semibold text-lg">70% of your goal</p>
      </div>
    </Card>
  );
};

export default ProcessChart;
