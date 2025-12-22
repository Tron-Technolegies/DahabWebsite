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
      script.innerHTML = JSON.stringify(product.productSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  return loading ? (
    <Loading />
  ) : (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
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
          <SingleMinerDetailsTabs product={product} />

          {/*  FAQ Section below product tabs */}
          <ProductFaqSection product={product} />
        </>
      )}

      {/* <FeaturedSection loading={featureLoading} products={products} /> */}
    </div>
  );
}
