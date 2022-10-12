import React from "react";

import classnames from "classnames";
import { motion } from "framer-motion";
import styles from "../elite-global-gathering/hero-section.module.css";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function HeroSection() {
  return (
    <div className={classnames(styles.heroBg, "flex items-center")}>
      <div className={classnames(styles.hero_Border,"flex-1 flex items-center justify-center text-center" )}>
        <h3 className={classnames(styles.heroTitle, "items-center justify-center")}>
          lorem ipsum in the hjead did got gnjhon troj
        </h3>
      </div>
    </div>
  );
}

export default HeroSection;
