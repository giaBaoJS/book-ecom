import { Button, Table } from "antd";
import React from "react";
import ActionButton from "../ActionButton/ActionButton";

const AuthorManager = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "BirthDay",
      dataIndex: "birthDay",
    },
    {
      title: "Story",
      dataIndex: "story",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 200,
      render: (data) => (
        <ActionButton
          data={data}
          handleOnEdit={handleOnEdit}
          handleOnDelete={handleOnDelete}
        />
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    let item = {
      key: i,
      id: i,
      birthDay: "10/11",
      story:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nemo dolorem odio harum molestias laudantium, maiores, fugiat cumque illo minus mollitia omnis nisi repudiandae recusandae eius aut! Quaerat, voluptate animi? ",
      name: `Edward King ${i}`,
    };
    data.push({
      ...item,
      action: item,
    });
  }
  const handleOnEdit = (data) => {
    console.log(data);
  };
  const handleOnDelete = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Button type="primary">Add new Author</Button>
      <br />
      <br />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 350 }}
      />
    </div>
  );
};

export default AuthorManager;
