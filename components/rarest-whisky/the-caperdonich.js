import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./the-caperdonich.module.css";

const TheCaperdonich = (props) => {
  const { title, description } = props;

  return (
    <Section>
      <div className={classnames(styles.rarest_society_Main,"flex flex-1 items-center justify-evenly rarest_society_Main")}>

        <div className={classnames("flex flex-1 items-center justify-evenly")}>
          <div
            className={classnames(styles.caperdonich, "flex flex-1 flex-col")}
            >
            <h2>{title}</h2>

            <p>{description}
            </p>
          </div>
        </div>
        <div className={classnames("flex-1 grow", styles.rightCol)}></div>
      </div>
    </Section>
  );
};

export default TheCaperdonich;
