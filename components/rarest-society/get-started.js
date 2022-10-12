import React from "react";
import styles from "./get-started.module.css";
import classnames from "classnames";
import Link from "next/link";

function GetStarted(props) {
  const { title, description1, buttonTitle } = props;

  return (
    <div className={classnames(styles.get_started_BG, "flex")}>
      <div
        className={classnames(
          styles.getStarted,
          "flex-1 flex items-center justify-center text-center"
        )}
      >
        <div className={styles.get_started_text}>
          <h2 className={styles.get_started_title}>{title}</h2>

          <p>{description1}</p>
        </div>

        <div
          className={classnames(
            styles.subscribeButton,
            ""
          )}
        >
          <Link href={"/registration"}>
            <button>{buttonTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
