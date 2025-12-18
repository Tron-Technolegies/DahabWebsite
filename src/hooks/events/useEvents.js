import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const useGetAllEvents = ({ inView }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/events`);
      return data;
    },
    enabled: inView,
    refetchOnWindowFocus: false,
  });
  return { isLoading, isError, data };
};

export const useGetSingleEvent = ({ slug }) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["single-event", slug],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/events/slug/${slug}`);
      return data;
    },
  });
  return { isLoading, data };
};
