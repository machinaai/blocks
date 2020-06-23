import React from "react";
import styles from "./index.less";

import { TimePicker } from "antd";

const { RangePicker } = TimePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-bordered">
      <>
        <TimePicker bordered={false} />
        <RangePicker bordered={false} />
      </>
    </div>
  </div>
);
