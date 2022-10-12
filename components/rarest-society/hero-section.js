import React from "react";
import styles from "../rarest-society/hero.module.css";
import classnames from "classnames";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function HeroSection() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <motion.div
      className={classnames(styles.heroBg, "flex")}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
    >
      <div className="flex-1 flex items-center justify-center text-center">
        <motion.h3 className={styles.heroTitle}>
          A Resplendent Lifestyle of Only The Best
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default HeroSection;
