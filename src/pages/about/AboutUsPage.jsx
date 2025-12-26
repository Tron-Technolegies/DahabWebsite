import React, { useEffect } from "react";
import AboutLandingSection from "../../components/about/landing/AboutLandingSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import MapSection from "../../components/Home/mapsection/MapSection";
import AboutPageContactSection from "../../components/about/contactUs/AboutPageContactSection";
import SolutionsSection from "../../components/about/SolutionsSection";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GMB from "../../components/about/GMB";
import EventSection from "../../components/Home/eventsSection/EventSection";

export default function AboutUsPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          About Dahab Miners | Leading Bitcoin & Crypto Mining Company UAE
        </title>
        <meta
          name="description"
          content="Dahab Miners is a leading crypto mining company in the UAE, providing ASIC miner sales, mining hosting, repairs, and infrastructure across Abu Dhabi and Ethiopia."
        />
        <meta
          name="keywords"
          content="Crypto mining company in UAE, Bitcoin mining company in Dubai, ASIC mining company UAE, Crypto mining infrastructure provider, Mining hosting company UAE, Dahab Miners Ethiopia mining farm"
        />
        <link rel="canonical" href={fullUrl} />
      </Helmet>
      <AboutLandingSection />
      <WhyChooseUs />
      <EventSection />
      <MapSection />
      <SolutionsSection />
      <GMB />
      <AboutPageContactSection />
    </div>
  );
}
