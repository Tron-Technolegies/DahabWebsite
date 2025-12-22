import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const useGetAllProduct = ({
  keyWord,
  cryptoCurrencyOption,
  manufacturerOptions,
  sortby,
  currentPage,
  productCategory,
}) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [
      "products",
      keyWord,
      cryptoCurrencyOption,
      manufacturerOptions,
      productCategory,
      sortby,
      currentPage,
    ],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/users/product`, {
        withCredentials: true,
        params: {
          keyWord,
          cryptoCurrencyOption,
          manufacturerOptions,
          productCategory,
          sortby,
          currentPage,
        },
      });
      return data;
    },
  });
  return { isLoading, isError, data };
};

export const useGetFeaturedProduct = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["featured-product"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/users/product/featured`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useGetSingleProduct = ({ id }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/users/product/${id}`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isLoading, isError, data };
};
