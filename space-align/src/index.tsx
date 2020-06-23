import React from "react";
import styles from "./index.less";

import { Space, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-space-demo-align">
      <div className="space-align-container">
        <div className="space-align-block">
          <Space align="center">
            center
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="start">
            start
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="end">
            end
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="baseline">
            baseline
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
      </div>
    </div>
  </div>
);
