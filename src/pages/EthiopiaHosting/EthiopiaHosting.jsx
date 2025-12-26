import React, { useEffect } from "react";
import EthiopiaLanding from "../../components/EthiopiaHosting/EthiopiaLanding";
import EthiopiaAdvantagesSection from "../../components/EthiopiaHosting/EthiopiaAdvantages/EthiopiaAdvantagesSection";
import EthiopiaAdvantage2Section from "../../components/EthiopiaHosting/EthiopiaAdvantages2/EthiopiaAdvantage2Section";
import EthiopiaSafetySection from "../../components/EthiopiaHosting/EthiopiaSafety/EthiopiaSafetySection";
import AbudhabiConsulting from "../../components/AbuDhabiHosting/abudhabiconsulting/AbudhabiConsulting";
import AbudhabiContactUs from "../../components/AbuDhabiHosting/abudhabiContact/AbudhabiContactUs";
import EthiopiaFeatures from "../../components/EthiopiaHosting/EthiopiaFeatures";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function EthiopiaHosting() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Bitcoin Mining in Ethiopia | Low-Cost Hydropower & Hosting | Dahab
          Miners
        </title>
        <meta
          name="description"
          content="Bitcoin mining in Ethiopia powered by low-cost hydropower. Secure facilities, ASIC hosting, 24/7 support, and high profitability with Dahab Miners."
        />
        <meta
          name="keywords"
          content="Crypto mining in Ethiopia, Bitcoin mining in Ethiopia, Crypto mining farms Ethiopia, ASIC miners Ethiopia, Host miners in Ethiopia, ASIC Miner hosting in Ethiopia, bitcoin mining hosting ethiopia"
        />
        <link
          rel="canonical"
          href={
            fullUrl ||
            "https://dahabminers.com/host-miners/bitcoin-mining-hosting-ethiopia"
          }
        />
      </Helmet>

      <EthiopiaLanding />
      <EthiopiaFeatures />
      <EthiopiaAdvantagesSection />
      <EthiopiaAdvantage2Section />
      <EthiopiaSafetySection />
      <AbudhabiConsulting />
      <AbudhabiContactUs />
    </div>
  );
}
