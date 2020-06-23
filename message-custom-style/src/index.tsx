import React from "react";
import styles from "./index.less";

import { message, Button } from "antd";

const success = () => {
  message.success({
    content: "This is a prompt message with custom className and style",
    className: "custom-class",
    style: {
      marginTop: "50%",
    },
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-message-demo-custom-style">
      <Button onClick={success}>Customized style</Button>
    </div>
  </div>
);
