import React, { useEffect } from "react";
import AbudhabiLanding from "../../components/AbuDhabiHosting/AbudhabiLanding";
import AbuDgabiFeatureSection from "../../components/AbuDhabiHosting/features/AbuDgabiFeatureSection";
import WhyAbudhabiSection from "../../components/AbuDhabiHosting/whyAbudhabi/WhyAbudhabiSection";
import SecurityMeasuresSection from "../../components/AbuDhabiHosting/securityMeasures/SecurityMeasuresSection";
import AbudhabiTechnologySection from "../../components/AbuDhabiHosting/technology/AbudhabiTechnologySection";
import AbudhabiConsulting from "../../components/AbuDhabiHosting/abudhabiconsulting/AbudhabiConsulting";
import AbudhabiContactUs from "../../components/AbuDhabiHosting/abudhabiContact/AbudhabiContactUs";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function AbuDhabiHosting() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Bitcoin Mining Hosting in Abu Dhabi | ASIC Hosting UAE | Dahab Miners
        </title>
        <meta
          name="description"
          content="Secure Bitcoin mining hosting in Abu Dhabi with professional ASIC hosting, reliable infrastructure, 24/7 monitoring, and expert operational support across the UAE."
        />
        <meta
          name="keywords"
          content="Bitcoin mining in Abu Dhabi, ASIC miner hosting Abu Dhabi, Bitcoin hosting services UAE, Crypto mining hosting Abu Dhabi, Bitcoin mining data center Abu Dhabi, ASIC hosting UAE, Crypto miner hosting UAE, Bitcoin mining hosting Abu Dhabi"
        />
        <link
          rel="canonical"
          href={
            fullUrl ||
            "https://dahabminers.com/host-miners/bitcoin-mining-hosting-abu-dhabi"
          }
        />
      </Helmet>
      <AbudhabiLanding />
      <AbuDgabiFeatureSection />
      <WhyAbudhabiSection />
      <SecurityMeasuresSection />
      <AbudhabiTechnologySection />
      <AbudhabiConsulting />
      <AbudhabiContactUs />
    </div>
  );
}
