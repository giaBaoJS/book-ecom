import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";

const ActionButton = ({ data, handleOnEdit, handleOnDelete }) => {
  return (
    <div>
      {handleOnEdit && (
        <EditOutlined
          className="text-yellow-500 bg-yellow-100 text-base cursor-pointer hover:bg-yellow-300 hover:text-yellow-800 transition-all rounded-full h-8 w-8 inline-flex items-center justify-center mr-2"
          onClick={() => {
            handleOnEdit(data);
          }}
        />
      )}
      {handleOnDelete && (
        <Popconfirm
          title="Are you sure？"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleOnDelete(data)}
        >
          <DeleteOutlined className="text-red-500 bg-red-100 text-base cursor-pointer hover:bg-red-300 hover:text-red-800 transition-all rounded-full h-8 w-8 inline-flex items-center justify-center" />
        </Popconfirm>
      )}
    </div>
  );
};

export default ActionButton;
