import styles from "./index.less";

import React, { useState } from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const App = () => {
  const [dates, setDates] = useState([]);
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };

  return (
    <RangePicker
      disabledDate={disabledDate}
      onCalendarChange={(value) => {
        setDates(value);
      }}
    />
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-select-in-range">
      <App />
    </div>
  </div>
);
