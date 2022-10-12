import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import InfoBlock from "../layout/content/info-Block";
import styles from "../highland-experience/huntingExcursions.module.css";

const HuntingExcursions = (props) => {
  const { title, description1, description2, imageurl } = props;
  return (
    <Section>
      <div className={classnames("flex flex-1 justify-evenly rarest_society_Main" )}>
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>

        <div
          className={classnames(styles.scotchWhiskie, "flex flex-1 flex-col")}
        >
          {/* <h2>Rarest scotch whiskies</h2> */}
          <h2>{title}</h2>

          <p>
            {description1}
            {/* <br />
            <br />
            {description2} */}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HuntingExcursions;
