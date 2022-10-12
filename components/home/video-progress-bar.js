import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import _ from "lodash";
import styles from "./home-register.module.css";
import { motion } from "framer-motion";

import "react-video-seek-slider/styles.css";
import Link from "next/link";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const VideoProgressBar = ({ index, onIndexChange, progress }) => {
  useEffect(() => {
    if (progress === 100) {
      onIndexChange && onIndexChange(index === 3 ? 0 : index + 1);
    }
  }, [progress]);

  const renderLineSection = (idx) => {
    return (
      <>
        <div
          className={classnames("video-timeline-item", {
            "video-timeline-active": index === idx,
          })}
          onClick={() => {
            onIndexChange && onIndexChange(idx);
          }}
        >
          <div className="video-timeline-item-line-wrapper">
            <div
              className={classnames("video-timeline-item-line-progress", {
                "video-timeline-item-line-done": index > idx,
              })}
              style={index === idx ? { width: `${progress}%`, opacity: 1 } : {}}
            />
            <div className="video-timeline-item-line-bg" />
          </div>
          <div
            className={classnames("video-timeline-dot", {
              "video-timeline-dot-filled": index > idx,
            })}
          />
        </div>
      </>
    );
  };

  return (
    <div>
      
      <div className="video-timeline-container video-timeline-container-active">
        <div className="video-timeline-dot video-timeline-dot-filled"></div>
        <div className="video-timeline-wrapper">
          {_.range(4).map(renderLineSection)}
        </div>
      </div>
    </div>
  );
};

export default VideoProgressBar;
