import React from "react";

import Banner from "../components/rarest-society/banner";
import HeroSection from "../components/rarest-society/hero-section";
import RarestScotchWhiskiesSection from "../components/rarest-society/rarest-scotch-whiskies-section";
import HighlandExperiences from "../components/rarest-society/highland-experiences";
import EliteGlobalGathering from "../components/rarest-society/elite-global-gatherings";
import GetStarted from "../components/rarest-society/get-started";
import Header from "../components/layout/header/header";
import Nav from "../components/layout/header/nav";
import Footer from "../components/layout/footer/footer";

function Details() {
  return (
    <div>
      {/* <Header /> */}
      <Nav />
      <Banner />
      <HeroSection />

      <RarestScotchWhiskiesSection
        title="Rarest scotch whiskies"
        description1=" As a founding member, you will receive among the rarest and most
      revered icons of Highland single malt, a Macallan 1968. Distilled on
      the 1961 and matured for over five decades at the distillery and
      decanted to 100, this is truly among the rarest of spirits to enjoy
      in the rarest of company."
        description2=" Members can also peruse a host of forthcoming releases from among
      the most revered distilleries (featured menu of forthcoming
      bottlings in 2022 /23 (sample pack)"
      />

      <HighlandExperiences
        title="Rarified scottish highland experiences"
        description1="Members can also peruse a host of forthcoming releases from among the most revered distilleries  (featured menu of forthcoming bottlings in 2022 /23  (sample pack)"
      />

      <EliteGlobalGathering
        title="Elite
      global gatherings"
        description1={
          "Member only events hosted in the world's iconic urban and getaway destinations"
        }
      />

      <Footer />
    </div>
  );
}

export default Details;
