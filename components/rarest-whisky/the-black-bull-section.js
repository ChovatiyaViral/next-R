import { useRef } from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./the-black-bull-section.module.css";

const TheBlackBull = (props) => {
  const { title, description } = props;

  return (
    <Section>
      <div className={classnames(styles.rarest_society_Main,"flex flex-1 items-center justify-evenly rarest_society_Main")}>
        <div className={classnames(styles.the_black_bull_BG, "flex flex-1")}>
          <div className={classnames(styles.the_black_bull_Text)}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className={classnames("flex-1 gow", styles.rightCol)}></div>
      </div>
    </Section>
  );
};

export default TheBlackBull;
