import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "../highland-experience/golf.module.css";

const Golf = (props) => {
  const { title, imageurl } = props;
  return (
    <Section>
      <div className={classnames("flex flex-1 items-center justify-center rarest_society_Main")}>
        <div className={classnames(styles.section1, styles.leftCol,"flex items-center flex-1 flex-col")}>
          <h2>{title}</h2>
        </div>
        <div className={classnames("flex-1 grow", styles.rightCol)}></div>
      </div>
    </Section>
  );
};

export default Golf;
