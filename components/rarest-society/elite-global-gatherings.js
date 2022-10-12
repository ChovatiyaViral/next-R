import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./elite-global-gatherings.module.css";

const EliteGlobalGathering = (props) => {
  const { title, description1 } = props;

  return (
    <Section>
      <div className={classnames(styles.global_gathering_main,"flex flex-1 items-center justify-evenly rarest_society_Main")}>
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>
        <div className={classnames(styles.highlandBg, "flex flex-1 flex-col ")}>
          <div className={classnames(styles.highlandText)}>
            <h2>{title}</h2>
            <p>{description1}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EliteGlobalGathering;
