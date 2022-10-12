import { useRef } from "react";

import Section from "../layout/content/section";
import classnames from "classnames";
import styles from "./highland-experiences.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const HighlandExperiences = (props) => {
  const { title, description1 } = props;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Section>
      <div
        className={classnames(styles.highland_main,
          "flex flex-1 items-center justify-evenly"
        )}
      >
        <div className={classnames(styles.highlandBg, "flex flex-1 flex-col ")}>
          <div className={classnames(styles.highlandText)}>
            <motion.h2>{title}</motion.h2>
            <p>{description1}</p>
          </div>
        </div>

        <div className={classnames("flex-1 grow", styles.righttCol)}></div>
      </div>
    </Section>
  );
};

export default HighlandExperiences;
