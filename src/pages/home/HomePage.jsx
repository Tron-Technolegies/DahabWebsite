import { useEffect } from "react";
import LandingSection from "../../components/Home/LandingSection/LandingSection";
import Miners from "../../components/Home/MinersSection/Miners";
import MiningFacilitiesSection from "../../components/Home/MiningFacilities/MiningFacilitiesSection";
import HardwareReviewSection from "../../components/Home/HardwareReviews/HardwareReviewSection";
import PerformanceMetrics from "../../components/Home/performanceMetrics/PerformanceMetrics";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import CryptoCurrencySection from "../../components/Home/Cryptocurrency/CryptoCurrencySection";
import { Helmet } from "react-helmet-async";
import SecondSection from "../../components/Home/secondsection/SecondSection";
import ThirdSection from "../../components/Home/thirdsection/ThirdSection";
import Calculator from "../../components/Home/calculator/Calculator";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import FAQSection from "../../components/Home/Faq/FAQSection";
import DiscussSection from "../../components/Home/Discuss/DiscussSection";
import useGetBitCoinData from "../../hooks/coins/useGetBitCoinData";
import { useDispatch } from "react-redux";
import { setBlockReward, setDifficulty } from "../../slices/userSlice";
import MapComparison from "../../components/HostMining/MapComparison";
import { useLocation } from "react-router-dom";
import ProductCategorySection from "../../components/Home/productCategories/ProductCategorySection";
import ServiceSection from "../../components/Home/servicesSection/ServiceSection";
import FoundersSection from "../../components/Home/founders/FoundersSection";
import EventSection from "../../components/Home/eventsSection/EventSection";

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dahabminers.com/#website",
    name: "Dahab Miners",
    url: "https://dahabminers.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dahabminers.com/#organization",
    name: "Dahab Miners",
    url: "https://dahabminers.com",
    logo: "https://dahabminers.com/home/logo.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971509669623",
      contactType: "customer support",
      areaServed: [
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        {
          "@type": "Country",
          name: "Ethiopia",
        },
      ],
    },
  },
];

export default function HomePage() {
  const { loading, btcData } = useGetBitCoinData();
  const dispatch = useDispatch();
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (btcData) {
      dispatch(setDifficulty(btcData?.difficulty));
      dispatch(setBlockReward(btcData?.reward_block));
    }
  }, [loading]);
  return (
    <div className="">
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
        <title>
          Crypto Mining in UAE | Bitcoin Mining in Dubai – Dahab Miners
        </title>
        <meta
          name="description"
          content="Crypto mining in UAE made easy. Buy Bitcoin mining machines, host miners in Dubai & Ethiopia, and get expert ASIC repair support with Dahab Miners"
        />
        <meta
          name="keywords"
          content="Bitcoin Mining in Dubai, Bitcoin Mining Machines in Dubai, Crypto mining in UAE, Crypto mining company in UAE, Crypto Mining Solutions in UAE, ASIC miner hosting services in UAE, Bitcoin mining in Ethiopia"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <LandingSection />
      <Miners />
      <ProductCategorySection />
      {/* <ProfitSection /> */}

      <MapComparison />
      <ThirdSection btcData={btcData} />
      <Calculator />
      <ServiceSection />
      <MiningFacilitiesSection />
      <SecondSection />
      <EventSection />
      <HardwareReviewSection />
      <PerformanceMetrics />

      <WhyChooseUs />
      <FoundersSection />
      <CryptoCurrencySection />

      {/* <BlogSection /> */}
      <Testimonials />
      <FAQSection full={false} />
      <DiscussSection />
      {/* {<ContactForm />} */}
    </div>
  );
}
