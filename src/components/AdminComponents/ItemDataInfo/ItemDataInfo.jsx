import { Card } from "antd";
import React from "react";
const ItemDataInfo = ({ Ico, title, number, color }) => {
  return (
    <Card bordered={false}>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-base">{title}</h1>
          <h2 className="text-2xl font-semibold">{number}</h2>
        </div>
        <div
          className={`rounded-full h-10 w-10 flex flex-row justify-center bg-${color}-100 `}
        >
          <Ico className={`text-2xl text-${color}-500 `} />
        </div>
      </div>
    </Card>
  );
};

export default ItemDataInfo;
