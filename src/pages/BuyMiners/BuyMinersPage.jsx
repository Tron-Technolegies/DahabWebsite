import React, { useEffect } from "react";
import BuyMinersSection from "../../components/buyMiners/BuyMinersSection";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function BuyMinersPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://dahabminers.com/buy-bitcoin-miners-uae#webpage",
      name: "Buy Bitcoin Mining Machines in UAE",
      url: "https://dahabminers.com/buy-bitcoin-miners-uae",
      description:
        "Buy Bitcoin mining machines in UAE from Dahab Miners. Explore a wide range of ASIC miners including Bitmain Antminer, Bitdeer SealMiner, IceRiver, and more with expert support and hosting solutions.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dahabminers.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Buy Bitcoin Mining Machines in UAE",
          item: "https://dahabminers.com/buy-bitcoin-miners-uae",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
        <title>
          Buy Bitcoin Mining Machines in Dubai | ASIC Miners for Sale UAE
        </title>
        <meta
          name="description"
          content="Buy ASIC Bitcoin mining machines in Dubai, UAE. Explore miners from Bitmain Antminer, Bitdeer SealMiner, IceRiver, and more at Dahab Miners.."
        />
        <meta
          name="keywords"
          content="Buy Bitcoin mining machines in UAE, Bitcoin miners for sale in UAE, ASIC miners for sale in Dubai, Buy ASIC mining machines UAE, Bitcoin mining hardware UAE, Crypto mining machines for sale UAE"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BuyMinersSection />
    </div>
  );
}

// {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     name: "Buy Bitcoin Miners in UAE",
//     url: "https://dahabminers.com/buy-bitcoin-miners-uae",
//     description:
//       "Explore and purchase top Bitcoin mining machines in the UAE, including models like Bitmain Antminer AL1 Pro, DragonBall Miner A11, IceRiver AL3, and DragonBall Miner A40. Benefit from expert consultation, genuine products, and tailored hosting services.",
//     breadcrumb: {
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://dahabminers.com/",
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "Buy Bitcoin Miners in UAE",
//           item: "https://dahabminers.com/buy-bitcoin-miners-uae",
//         },
//       ],
//     },
//     mainEntity: {
//       "@type": "Product",
//       name: "Bitcoin Mining Machines",
//       description:
//         "High-performance Bitcoin mining hardware available in the UAE.",
//       brand: {
//         "@type": "Brand",
//         name: "Dahab Miners",
//       },
//       offers: {
//         "@type": "Offer",
//         url: "https://dahabminers.com/buy-bitcoin-miners-uae",
//         priceCurrency: "AED",
//         availability: "https://schema.org/InStock",
//         seller: {
//           "@type": "Organization",
//           name: "Dahab Miners",
//           url: "https://dahabminers.com/",
//         },
//       },
//     },
//     provider: {
//       "@type": "Organization",
//       name: "Dahab Miners",
//       url: "https://dahabminers.com/",
//       logo: "https://dahabminers.com/logo.png",
//       sameAs: [
//         "https://www.facebook.com/dahabminers",
//         "https://twitter.com/dahabminers",
//         "https://www.linkedin.com/company/dahabminers",
//       ],
//     },
//   };
