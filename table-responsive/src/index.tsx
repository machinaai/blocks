import React from "react";
import styles from "./index.less";

import { Table } from "antd";

const columns = [
  {
    title: "Name (all screens)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age (medium screen or bigger)",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "Address (large screen or bigger)",
    dataIndex: "address",
    key: "address",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-responsive">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
