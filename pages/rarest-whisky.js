import React from "react";

import Banner from "../components/rarest-whisky/banner";
import RarestScotchWhiskiesSection from "../components/rarest-whisky/RarestScotchWhiskiesSection";
import HeroSection from "../components/rarest-whisky/hero-section";
import GetStarted from "../components/rarest-society/get-started";
import Header from "../components/layout/header/header";
import TheMacallan from "../components/rarest-whisky/the-macallan-section";
import TheBlackBull from "../components/rarest-whisky/the-black-bull-section";
import RarestOfTheRare from "../components/rarest-whisky/rarest-of-the-rare";
import TheKinclaith from "../components/rarest-whisky/the-kinclaith";
import TheCaperdonich from "../components/rarest-whisky/the-caperdonich";
import TheTrilogy from "../components/rarest-whisky/the-trilogy";
import Nav from "../components/layout/header/nav";
import Footer from "../components/layout/footer/footer";

function Details() {
  return (
    <div>
      {/* <Header /> */}
      <Nav />

      <Banner videoURL="https://player.vimeo.com/progressive_redirect/playback/744464165/rendition/1080p/file.mp4?loc=external&signature=2b971acc48563302bf11458dc7670e08a3988099bc1bfec91ada11e946438824" />

      <RarestScotchWhiskiesSection
        title="Rarest scotch whiskies"
        description="Discover an impressive collection of single malt whisky 
        here at rarest society"
      />

      <HeroSection title="an impressive collection of single malt whisky" />

      <TheMacallan
        title={"the macallan 1999"}
        description1={
          "As a founding member, you will receive among the rarest and most revered icons of Highland single malt, a Macallan 1968. Distilled on the 1961 and matured for over five decades at the distillery and decanted to 100, this is truly among the rarest of spirits to enjoy in the rarest of company."
        }
        description2={
          "Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
        }
      />

      <TheBlackBull
        title="the blackbull 55 since 1999"
        description="Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
      />

      <RarestOfTheRare title="rarest of the rare" />

      <TheKinclaith
        title="the kinclaith 1999"
        description1="As a founding member, you will receive among the rarest and most revered icons of Highland single malt, a Macallan 1968. Distilled on the 1961 and matured for over five decades at the distillery and decanted to 100, this is truly among the rarest of spirits to enjoy in the rarest of company."
        description2="  Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
      />

      <TheCaperdonich
        title="the caperdonich distillery since 1999"
        description="Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
      />

      <TheTrilogy title="the trilogy" />

     <Footer/>
    </div>
  );
}

export default Details;
