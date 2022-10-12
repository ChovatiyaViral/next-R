import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./home-register.module.css";
import "animate.css";
import classnames from "classnames";

import Header from "../layout/header/header";
import Video from "../layout/content/video";
import VideoProgressBar from "./video-progress-bar";
import Link from "next/link";
import Nav from "../layout/header/nav";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const HomeVideoComponent = () => {
  const videoRef = useRef();
  const [showResults, setShowResults] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [buttonFlag, setButtonFlag] = useState(true);
  const [clicked, setClicked] = useState(true);
  const [sound, setSound] = useState(false);
  const [mutedVideo, setmutedVideo] = useState(false);

  const videos = [
    {
      title: "rarest society",
      src: "https://player.vimeo.com/progressive_redirect/playback/744464165/rendition/1080p/file.mp4?loc=external&signature=2b971acc48563302bf11458dc7670e08a3988099bc1bfec91ada11e946438824",
      link: "/rarest-society",
    },
    {
      title: "rarest whiskies",
      src: "https://player.vimeo.com/progressive_redirect/playback/744464102/rendition/1080p/file.mp4?loc=external&signature=e05fda179bd2db24ad21050990ff20fa728d890b7c9ccdab889cb3f79d011152",
      link: "/rarest-whisky",
    },
    {
      title: "highland experiences",
      src: "https://player.vimeo.com/progressive_redirect/playback/744464135/rendition/1080p/file.mp4?loc=external&signature=7e6bb32e36792da7e79bec40ecac3bcde90d32594a2be03891619c04f4c1a29d",
      link: "/highland-experience",
    },
    {
      title: "elite global gatherings",
      src: "https://player.vimeo.com/progressive_redirect/playback/744464067/rendition/1080p/file.mp4?loc=external&signature=52dca1c8ef902a389131b2de4dd21b63d2c554fc5e97efa8b36a11881a036776",
      link: "/elite-global-gathering",
    },
  ];

  useEffect(() => {
    let interval = null;
    // console.log(videoRef, videoRef.current);
    if (videoRef) {
      interval = setInterval(function () {
        setProgress(
          Math.round(
            (videoRef.current.currentTime / videoRef.current.duration) * 100
          )
        );
      });

      videoRef.current.onended = () => {
        console.log("video ended");
        setProgress(0);
        clearInterval(interval);
      };
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [index, videoRef]);

  const handleClick = () => {
    setShowResults(true);
    setButtonFlag(false);
    setClicked(false);
  };

  const handleVideo = (e) => {
    // e.currentTarget.classList.add("diveinSectionMain1");
    setFullScreen(true);
  };

  const handle = (e) => {
    e.currentTarget.classList.add("diveinSectionHeading");
  };

  const handleIndexChange = (selectedIndex) => {
    console.log("Video index selected", selectedIndex);
    setProgress(0);
    setIndex(selectedIndex);
  };

  const handleToggleMute = () => {
    console.log("video sound", mutedVideo);
    // setmutedVideo(true)
    // setmutedVideo((current) => !current);
    {
      !sound ? setSound(true) : setSound(false);
    }
    console.log("sound on", sound, !sound);
  };

  return (
    <>
      <Header />
      {/* <Nav/> */}

      {/* {showResults ? (
        <VideoProgressBar
          onIndexChange={handleIndexChange}
          progress={progress}
          index={index}
        />
      ) : null} */}

      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          transition: { delay: 0.4, ...transition },
          scale: 1,
        }}
      >
        <div className="homediveinanimation ">
          <div className={styles.diveinSection}>
            <div
              className={styles.diveinSectionMain}
              style={{
                opacity: 1,
                clipPath: "inset(0px)",
                transform: "translateZ(0vw)",
              }}
              onClick={handleVideo}
            >
              <div className={styles.diveinSectionHeading} onClick={handle}>
                <motion.div className={styles.homeDiveinbg}></motion.div>
                <motion.h2
                  className={classnames(
                    styles.divein,
                    "items-center justify-center"
                  )}
                  onClick={handleClick}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    transition: { delay: 0.8, ...transition },
                    scale: 1,
                  }}
                >
                  {buttonFlag ? "Dive in" : videos[index].title}
                </motion.h2>
                <div
                  className={styles.memberRegistration}
                  style={{ transform: "none", opacity: 1 }}
                >
                  <Link
                    href={buttonFlag ? "/registration" : videos[index].link}
                  >
                    <motion.button
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        transition: { delay: 1, ...transition },
                        scale: 1,
                      }}
                    >
                      {buttonFlag ? "Accept Invitation" : "explore more"}
                      {/* acceptance of invite */}
                    </motion.button>
                  </Link>
                </div>

                <div className={classnames(styles.sound_main, "css-om0y7o")}>
                  <div className="css-1ceik0d">
                    <div className="css-18m3c3">
                      <canvas
                        className="css-w1atjl"
                        width="42"
                        height="16"
                      ></canvas>
                    </div>
                    <div className="css-fjbkjs" onClick={handleToggleMute}>
                      {sound ? "Sound on" : "Sound off"}
                    </div>
                  </div>
                </div>

                <div className={clicked ? "videoSection" : "videoSection1"}>
                  <Video
                    sound={sound}
                    onClick={handleToggleMute}
                    videoRef={videoRef}
                    videoUrl={videos[index].src}
                    videoComponentStyle={
                      fullScreen
                        ? {
                            width: "100vw",
                            height: "100vh",
                            objectFit: "cover",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
              {showResults ? (
                <VideoProgressBar
                  onIndexChange={handleIndexChange}
                  progress={progress}
                  index={index}
                />
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeVideoComponent;
