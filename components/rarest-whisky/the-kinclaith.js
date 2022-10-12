import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./the-kinclaith.module.css";

const TheKinclaith = (props) => {
  const { title, description1, description2 } = props;

  return (
    <Section>
      <div className={classnames("flex flex-1 items-center justify-evenly rarest_society_Main")}>
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>

        <div className={classnames(styles.the_kinclaith_BG,"flex flex-1 items-center justify-evenly")}>
          <div
            className={classnames(styles.the_kinclaith_text, "flex flex-1 flex-col")}
          >
            <h2>{title}</h2>

            <p>{description1}
            <br/><br/>

            {description2}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TheKinclaith;
