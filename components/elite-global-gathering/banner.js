import React from "react";

import classnames from "classnames";
import Image from "next/image";
import styles from "../elite-global-gathering/banner.module.css";
import Link from "next/link";

const Banner = (props) => {
  const { bannerTitle, bannerDescription, videoURL } = props;

  return (
    <div>
      <div className="flex flex-1 banner_main_section ">
        <video
          style={{ width: "100%", height: "100%" }}
          muted
          loop
          preload="auto"
          autoPlay
          playsInline=""
          // webkitplaysInline=""
          // x5playsInline=""
          src={videoURL}
        />
        <div
          className={classnames(
            styles.bannerTitle,
            "justify-start items-end flex flex-1 flex-col"
          )}
        >
          <Link href={"/"}>
            <svg
              width="17"
              height="26"
              viewBox="0 0 17 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 1L2 13L16 25" stroke="white" strokeWidth="2" />
            </svg>
          </Link>

          {/* <h2>
            <span>elite</span>
            <br />
            {bannerTitle}
          </h2>
          <p>{bannerDescription}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
