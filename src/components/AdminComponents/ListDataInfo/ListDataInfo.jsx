import Layout from "antd/lib/layout/layout";
import React from "react";
import ItemDataInfo from "../ItemDataInfo/ItemDataInfo";
import {
  BookOutlined,
  FormOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const ListDataInfo = () => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <ItemDataInfo
          Ico={UserOutlined}
          title="Users"
          number={20}
          color="blue"
        />
      </Col>
      <Col span={6}>
        <ItemDataInfo
          Ico={FormOutlined}
          title="Authors"
          number={100}
          color="green"
        />
      </Col>
      <Col span={6}>
        <ItemDataInfo
          Ico={BookOutlined}
          title="Books"
          number={1264}
          color="red"
        />
      </Col>
      <Col span={6}>
        <ItemDataInfo
          Ico={ShoppingOutlined}
          title="Orders"
          number={256}
          color="yellow"
        />
      </Col>
    </Row>
  );
};

export default ListDataInfo;
