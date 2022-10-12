import React from "react";

import classnames from "classnames";
import Image from "next/image";

import styles from "../rarest-society/banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-1 items-center banner_main_section">
        <video
          style={{ width: "100%", height: "100%" }}
          muted
          loop
          preload="auto"
          autoPlay
          playsInline=""
          // webkit-playsInline=""
          // x5-playsInline=""
          src="https://player.vimeo.com/progressive_redirect/playback/744464102/rendition/1080p/file.mp4?loc=external&signature=e05fda179bd2db24ad21050990ff20fa728d890b7c9ccdab889cb3f79d011152"
        />

        {/* <div
          className={classnames(
            styles.bannerLogo,
            "items-center justify-center"
          )}
        >
          <Image
            src="/assets/images/welcome-logo.png"
            width={"120px"}
            height={"136px"}
            alt="bg image"
          />
        </div> */}
        <div
          className={classnames(
            styles.bannerTitle,
            "justify-center text-center"
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

          {/* <h2>RAREST SOCIETY</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
