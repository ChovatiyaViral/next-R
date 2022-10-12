import React from "react";
import Image from "next/image";
import styles from "./home-register.module.css";

const HomeRegister = ({ onEntered }) => {
  
  const register = () => {
    onEntered && onEntered();
  };

  return (
    <div className="welcome-container-bg">
      <Image
        src="/assets/images/welcome-logo.png"
        width={"120px"}
        height={"136px"}
        alt="bg image"
      />
      <div className="welcomeMain" style={{ opacity: 1, transform: "none" }}>
        <h2>RAREST SOCIETY</h2>
        <p>A RESPLENDENT LIFESTYLE ONLY For THE BEST</p>
      </div>

      <div
        className="welocme-headingMain"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className={styles.liftSideSvg}>
          <svg
            width="42"
            height="12"
            viewBox="0 0 42 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.231 5.80154L35.4255 0.060222L29.6842 5.86573L35.4897 11.607L41.231 5.80154ZM0.39423 7.02855L35.4631 6.83362L35.452 4.83365L0.383114 5.02858L0.39423 7.02855Z"
              fill="#FCF1DA"
            />
          </svg>
        </div>

        <div className={styles.welcomeButton}>
          <button onClick={register}>Welcome</button>
        </div>
        <div className={styles.rightSideSvg}>
          <svg
            width="42"
            height="12"
            viewBox="0 0 42 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.837825 5.83325L6.61133 11.6068L12.3848 5.83325L6.61133 0.0597491L0.837825 5.83325ZM6.61133 6.83325H41.6808V4.83325H6.61133V6.83325Z"
              fill="#FCF1DA"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default HomeRegister;
