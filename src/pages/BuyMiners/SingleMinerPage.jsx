import React, { useEffect, useState } from "react";
import SingleMinerTop from "../../components/buyMiners/singleMiner/SingleMinerTop";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleMinerDetailsTabs from "../../components/buyMiners/singleMiner/SingleMinerDetailsTabs";
import ProductFaqSection from "../../components/Home/Faq/ProductFaqSection";
import {
  useGetFeaturedProduct,
  useGetSingleProduct,
} from "../../hooks/userProducts/useProduct";

export default function SingleMinerPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;
  const { id } = useParams();
  const { isLoading: loading, data: product } = useGetSingleProduct({ id });
  const { isLoading: featureLoading, data: products } = useGetFeaturedProduct();

  // Match the schema for this product based on its name

  // Inject schema dynamically into <head>
  useEffect(() => {
    if (product && product.productSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = product.productSchema;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  return loading ? (
    <Loading />
  ) : (
    <div className="px-2 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
        <title>{product?.metaTitle}</title>
        <meta name="description" content={product?.metaDescription} />
        <meta name="keywords" content={product?.metaKeywords} />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          <Link
            className="bg-[#7decda] px-4 py-2 rounded-md w-fit ms-auto"
            to={"/buy-bitcoin-miners-uae"}
          >
            Go Back
          </Link>
          <p className="text-2xl font-semibold text-[#1ECBAF]">{`Buy ${product?.productName}`}</p>
        </div>
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <SingleMinerTop product={product} />
          {product.profitURLWord && (
            <div className="my-3 relative">
              <p className="text-xl">Profitability</p>
              <iframe
                src={`https://www.asicminervalue.com/widgets/miners/${product.profitURLWord}/profit?theme=dark`}
                className="w-full my-3 h-[450px] md:h-[350px] "
                frameBorder="0"
                style={{ borderRadius: "8px" }}
                allow="clipboard-write"
                title="Antminer S21e XP Hydro Profitability"
              ></iframe>
              <div className="w-full h-[60px] bg-[#0e172b] right-0 absolute bottom-0"></div>
              <div className="w-full bg-transparent h-[150px] absolute right-0 bottom-16"></div>
              <div className="md:w-2/3 w-full bg-transparent h-[50px] absolute left-0 top-14"></div>
            </div>
          )}
          <SingleMinerDetailsTabs product={product} />

          {/*  FAQ Section below product tabs */}
          <ProductFaqSection product={product} />
        </>
      )}

      {/* <FeaturedSection loading={featureLoading} products={products} /> */}
    </div>
  );
}
