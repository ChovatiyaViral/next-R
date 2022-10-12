import React from "react";
import styles from "../highland-experience/herosection.module.css";
import classnames from "classnames";

const HeroSection = (props) => {
  const { title } = props;
  return (
    <div className={classnames(styles.heroBg, "flex")}>
      <div className="flex-1 flex items-center justify-center text-center">
        <h3 className={styles.heroTitle}>
            {title}
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
