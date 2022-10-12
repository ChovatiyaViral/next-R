import React from "react";
import styles from "./footer.module.css";
import classnames from "classnames";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classnames(styles.get_started_BG, "flex")}>
      <div
        className={classnames(
          styles.getStarted,
          "flex-1 flex items-center justify-center text-center"
        )}
      >
        <div className={styles.get_started_text}>
          <h2 className={styles.get_started_title}>Accept Invitation</h2>

          <p>
           {" Member only events hosted in the world's iconic urban and getaway  destinations world's iconic urban and getaway destinations "}
          </p>

          <div className={styles.subscribeButton}>
            <Link href={"/registration"}>
              <button>JOIN THE RAREST SOCIETY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
