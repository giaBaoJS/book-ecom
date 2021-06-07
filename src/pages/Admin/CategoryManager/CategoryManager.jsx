import { Button, Col, Input, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../actions/categoryAction";
import ActionButton from "../ActionButton/ActionButton";

const CategoryManager = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  useEffect(() => {
    if (categories.length) {
      setData(
        categories.map((item) => ({
          key: item.id,
          ...item,
          action: item,
        }))
      );
    }
  }, [categories]);
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

  const handleOnEdit = (data) => {
    console.log(data);
  };
  const handleOnDelete = (data) => {
    console.log(data);
  };
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const keyword = value.trim();
    setData(
      categories.filter(
        (item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      )
    );
  };
  return (
    <div>
      <Row justify="space-between">
        <Col span={16}>
          <Input placeholder="Enter keyword..." onChange={handleOnSearch} />
        </Col>
        <Col>
          <Button type="primary">Add new Category</Button>
        </Col>
      </Row>
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

export default CategoryManager;
