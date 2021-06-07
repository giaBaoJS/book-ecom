import { Button, Table, Input, Row, Col, notification, Image } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuthor } from "../../../actions/authorAction";
import { deleteAuthor } from "../../../api";
import {
  MODALFORM_ADD_AUTHOR,
  MODALFORM_EDIT_AUTHOR,
} from "../../../constants";
import ActionButton from "../ActionButton/ActionButton";

const AuthorManager = () => {
  const dispatch = useDispatch();
  const { authors } = useSelector((state) => state.authorReducer);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getAllAuthor());
  }, [dispatch]);
  useEffect(() => {
    if (authors.length) {
      setData(
        authors.map((item) => ({
          key: item.id,
          ...item,
          birthDay: new Date(item.birthDay).toLocaleDateString("en-GB"),
          action: item,
        }))
      );
    }
  }, [authors]);
  useEffect(() => {
    setLoading(false);
  }, [data]);
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
      title: "Avatar",
      dataIndex: "avatar",
      render: (data) => <Image width={100} src={data} />,
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

  const handleOnEdit = (data) => {
    dispatch({ type: MODALFORM_EDIT_AUTHOR, payload: data });
  };
  const handleOnDelete = async ({ id }) => {
    setLoading(true);
    try {
      await deleteAuthor(id);
      notification.success({
        message: `Author(${id}) Deleted`,
        duration: 3,
      });
      dispatch(getAllAuthor());
    } catch {
      setLoading(false);
      notification.error({
        message: `Something was wrong!`,
        duration: 3,
      });
    }
  };

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const keyword = value.trim();
    setData(
      authors.filter(
        (item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      )
    );
  };
  return (
    <>
      <Row justify="space-between">
        <Col span={16}>
          <Input placeholder="Enter keyword..." onChange={handleOnSearch} />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() =>
              dispatch({ type: MODALFORM_ADD_AUTHOR, payload: null })
            }
          >
            Add new Author
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 350 }}
        loading={loading}
      />
    </>
  );
};

export default AuthorManager;
