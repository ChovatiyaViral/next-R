import { useRef } from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./the-macallan-section.module.css";

const TheMacallan = (props) => {
  const { title, description1, description2 } = props;

  return (
    <Section>
      <div className={classnames("flex flex-1 items-center justify-evenly rarest_society_Main")}>
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>

        <div className={classnames(styles.TheMacallan_Bg, "flex flex-1 flex-col ")}>
          <div className={classnames(styles.TheMacallan_Text)}>
            <h2>{title}</h2>
            <p>
              {description1}
              <br />
              <br />
              {description2}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TheMacallan;
