import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./elite-global-gatherings.module.css";

const EliteGlobalGathering = (props) => {
  const { title, description } = props;

  return (
    <Section>
      <div className={classnames(styles.main_section,"flex flex-1 items-center justify-evenly")}>
        <div
          className={classnames(styles.scotchWhiskie, "flex-1 flex-col")}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={classnames("flex-1 flex", styles.rightCol)}></div>
      </div>
    </Section>
  );
};

export default EliteGlobalGathering;
