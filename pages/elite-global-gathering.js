import React from "react";

import Banner from "../components/elite-global-gathering/banner";
import HeroSection from "../components/elite-global-gathering/hero-section";
import EliteGlobalGathering from "../components/elite-global-gathering/elite-global-gatherings";
import WhiskiesEvent from "../components/elite-global-gathering/whisky-event";
import BritishOpen from "../components/elite-global-gathering/british-open";
import UpcomingEvent from "../components/elite-global-gathering/upcoming-event";
import Header from "../components/navBar";
import Events from "../components/elite-global-gathering/events";
import Nav from "../components/layout/header/nav"
import Footer from "../components/layout/footer/footer";

function GlobalGathering() {
  return (
    <div>
      {/* <Header /> */}
      <Nav/>
      <Banner
        // bannerTitle="global gathering"
        // bannerDescription="Memeber only events hosted in the world’s iconic urban and gateway destinations"
        videoURL="https://player.vimeo.com/progressive_redirect/playback/744464067/rendition/1080p/file.mp4?loc=external&signature=52dca1c8ef902a389131b2de4dd21b63d2c554fc5e97efa8b36a11881a036776"
      />
      <EliteGlobalGathering
        title="elite global gatherings"
        description="lorem ipsum on the way to go, till we fill in the page  for the rest"
      />
      <HeroSection />

      <WhiskiesEvent
        title="whisky event"
        description="* April 2023 (whisky event in Mumbai India) - Shawn to share details"
      />

      <BritishOpen
        title="british open"
        description="* July 2023 British Open (round of golf followed by dinner with Sir Nick)"
      />

      <UpcomingEvent title="upcoming events" />

      <Events
        title="playdate wednesdays at libertine night"
        buttonText="Learn More"
      />

      <Footer/>
    </div>
  );
}

export default GlobalGathering;
