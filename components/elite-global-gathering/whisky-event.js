import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./whiskey-event.module.css";

const whiskiesEvent = (props) => {
  const { title, description } = props;

  return (
    <Section>
      <div className={classnames("flex flex-1 items-center justify-evenly rarest_society_Main")}>
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>
        <div
          className={classnames(
            styles.whiskies_event,
            "flex flex-1 flex-col items-center justify-center"
          )}
        >
          <h2>{title}</h2>

          <p>{description}</p>
        </div>
      </div>
    </Section>
  );
};

export default whiskiesEvent;
