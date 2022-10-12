import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./british-open.module.css";

const BritishOpen = (props) => {
  const { title, description } = props;

  return (
    <Section>
      <div
        className={classnames(
          styles.british_open_Main,
          "flex flex-1 items-center justify-evenly"
        )}
      >
        <div
          className={classnames(
            styles.british_open,
            "flex flex-1 flex-col items-center justify-center"
          )}
        >
          <h2>{title}</h2>

          <p>{description}</p>
        </div>
        <div className={classnames("flex-1 grow", styles.rightCol)}></div>
      </div>
    </Section>
  );
};

export default BritishOpen;
