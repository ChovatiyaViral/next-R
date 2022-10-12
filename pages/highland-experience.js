import React from "react";
import Image from "next/image";
import Header from "../components/navBar";
import Banner from "../components/highland-experience/banner";
import HeroSection from "../components/highland-experience/heroSection";
import LochNessRiding from "../components/highland-experience/lochNessRiding";
import Sections from "../components/highland-experience/sections";
import Golf from "../components/highland-experience/golf";
import HuntingExcursions from "../components/highland-experience/huntingExcursions";
import PrivateFishing from "../components/highland-experience/privateFishing";
import Nav from "../components/layout/header/nav";
import GetStarted from "../components/rarest-society/get-started";
import Footer from "../components/layout/footer/footer";

const ExperienceDetails = () => {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <Banner
        // bannerTitle="Rarified scottish highland experiences"
        // bannerDescription={`Memeber only events hosted in the world’s iconic urban and gateway destinations`}
        videoURL="https://player.vimeo.com/progressive_redirect/playback/744464135/rendition/1080p/file.mp4?loc=external&signature=7e6bb32e36792da7e79bec40ecac3bcde90d32594a2be03891619c04f4c1a29d"
      />
      <HeroSection
        title="journey to the highlands"
        //  imageUrl="/assets/images/hero-section-background.png"
      />
      <Sections
        title="rarified castle experience"
        description="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without "
      />
      <LochNessRiding
        title="loch ness riding"
        //  imageUrl="/assets/images/hero-section-background.png"
      />
      <Golf title="golf" />
      <HuntingExcursions
        title="hunting excursions"
        description1="Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
        description2=""
      />
      <PrivateFishing
        title="private fishing"
        //  imageUrl="/assets/images/hero-section-background.png"
      />
      <Footer/>
    </>
  );
};

export default ExperienceDetails;
