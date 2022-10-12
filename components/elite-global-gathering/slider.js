import React from "react";
import classnames from "classnames";
import styles from "./events.module.css";

const Slider = (props) => {
  const { title, description, buttonText } = props;

  return (
    <div>
      <div className=" mb-8">
        <div className={classnames(styles.grandDel_BG, "flex flex-1")}>
          <h2>grand del</h2>
          <p>* July 2023</p>
        </div>
        <div className={classnames(styles.BottomSetions)}>
          <h3>{title}</h3>
          <button>{buttonText}</button>
        </div>
      </div>
      <div className="mb-8">
        <div
          className={classnames(
            styles.whisky_event_BG,
            "justify-center items-center flex"
          )}
        >
          <h2>whisky event</h2>
          <p>* Sep 2023</p>
        </div>
        <div className={classnames(styles.BottomSetions)}>
          <h3>{title}</h3>
          <button>{buttonText}</button>
        </div>
      </div>
      <div className="mb-8">
        <div
          className={classnames(
            styles.malivu_BG,
            "justify-center items-center  flex"
          )}
        >
          <h2>Malivu</h2>
          <p>* July 20233</p>
        </div>

        <div className={classnames(styles.BottomSetions)}>
          <h3>{title}</h3>
          <button>{buttonText}</button>
        </div>
      </div>
      <div className="mb-8">
        <div
          className={classnames(
            styles.malivu_event_BG,
            "justify-center items-center flex"
          )}
        >
          <h2>Malivu</h2>
          <p>* Nov 2023</p>
        </div>
        <div className={classnames(styles.BottomSetions)}>
          <h3>{title}</h3>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
