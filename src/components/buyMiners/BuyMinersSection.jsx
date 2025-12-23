import React, { useEffect, useState } from "react";
import BestSellingProducts from "./BestSellingProducts";
import SearchAndFilter from "./SearchAndFilter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import Pagination2 from "./Pagination2";
import {
  useGetAllProduct,
  useGetFeaturedProduct,
} from "../../hooks/userProducts/useProduct";

export default function BuyMinersSection() {
  const {
    manufacturerOptions,
    cryptoCurrencyOption,
    keyWord,
    sortby,
    productCategory,
  } = useSelector((state) => state.userProductSearch);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading: featuredLoading, data: featuredProducts } =
    useGetFeaturedProduct();
  //loading, refetch, products, pages
  const { isError, isLoading, data } = useGetAllProduct({
    keyWord,
    cryptoCurrencyOption,
    manufacturerOptions,
    sortby,
    currentPage,
    productCategory,
  });
  useEffect(() => {
    if (data) {
      setTotalPage(data.numOfPages);
    }
  }, [data]);

  return (
    <div className="bg-[#000618] px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 z-[1]">
      <div className="h-24 lg:h-40 flex justify-center items-center">
        <h1 className="buy-miners-heading text-2xl pb-5 lg:text-[40px] font-semibold">
          Buy Bitcoin Mining Machines in UAE
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-2">
        <div className="">
          <SearchAndFilter />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <BestSellingProducts products={data?.products} />
        )}
      </div>
      {totalPage > 1 && (
        <div className="flex justify-center">
          <Pagination2
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPage={totalPage}
            setTotalPage={setTotalPage}
          />
        </div>
      )}

      <div className="">
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#1ECBAF] text-center">
          Top Rated Mining Machines
        </h2>
        {featuredLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10">
            {featuredProducts?.products?.length > 0 &&
              featuredProducts?.products
                .slice(0, 4)
                .map((x) => (
                  <ProductCard
                    key={x._id}
                    name={x.productName}
                    img={x.productImage}
                    price={x.price}
                    slug={x.slug}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
}
