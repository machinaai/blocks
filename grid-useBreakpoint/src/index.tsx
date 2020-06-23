import React from "react";
import styles from "./index.less";

import { Grid, Tag } from "antd";

const { useBreakpoint } = Grid;

function UseBreakpointDemo() {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{" "}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
}

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-useBreakpoint">
      <UseBreakpointDemo />
    </div>
  </div>
);
