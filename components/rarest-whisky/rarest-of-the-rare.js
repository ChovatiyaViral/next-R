import React from "react";

import styles from "./rarest-of-the-rare.module.css";
import classnames from "classnames";

function RarestOfTheRare(props) {
  const { title } = props;

  return (
    <div className={classnames(styles.rarest_of_rare_BG, "flex")}>
      <div className="flex-1 flex items-center justify-center text-center">
        <h3 className={styles.rarest_of_rare_title}>{title}</h3>
      </div>
    </div>
  );
}

export default RarestOfTheRare;
