import React from "react";
import styles from "./index.less";

import { Alert } from "antd";
import TextLoop from "react-text-loop";

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-loop-banner">
      <Alert
        banner
        message={
          <TextLoop mask>
            <div>Notice message one</div>
            <div>Notice message two</div>
            <div>Notice message three</div>
            <div>Notice message four</div>
          </TextLoop>
        }
      />
    </div>
  </div>
);
