import React from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./rarest-scotch-whiskies.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RarestScotchWhiskiesSection = (props) => {
  const { title, description1, description2 } = props;

  return (
    <Section>
      <div
        className={classnames(
          "flex flex-1 items-center justify-evenly rarest_society_Main"
        )}
      >
        <div className={classnames("flex-1 grow", styles.leftCol)}></div>

        <div
          className={classnames(
            styles.scotchWhiskie_Main,
            "flex flex-1 items-center justify-evenly"
          )}
        >
          <div
            className={classnames(styles.scotchWhiskie, "flex flex-1 flex-col")}
          >
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

export default RarestScotchWhiskiesSection;
