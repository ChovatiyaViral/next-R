import React from "react";

import styles from "./the-trilogy.module.css";
import classnames from "classnames";

function TheTrilogy(props) {
  const { title } = props;

  return (
    <div className={classnames(styles.the_trilogy_BG, "flex")}>
      <div className="flex-1 flex items-center justify-center text-center">
        <h3 className={styles.the_trilogy_title}>{title}</h3>
      </div>
    </div>
  );
}

export default TheTrilogy;
