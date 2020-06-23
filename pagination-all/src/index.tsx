import React from "react";
import styles from "./index.less";

import { Pagination } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-all">
      <div>
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  </div>
);
