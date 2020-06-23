import React from "react";
import styles from "./index.less";

import { Space, Card } from "antd";

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

export default () => (
  <div className={styles.container}>
    <div id="components-space-demo-vertical">
      <SpaceVertical />
    </div>
  </div>
);
