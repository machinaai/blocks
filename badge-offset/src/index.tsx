import React from "react";
import styles from "./index.less";

import { Badge } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-offset">
      <>
        <Badge count={5} offset={[10, 10]}>
          <a href="#" className="head-example" />
        </Badge>
      </>
    </div>
  </div>
);
