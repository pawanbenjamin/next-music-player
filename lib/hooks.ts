import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  console.log("DATAAA IN USE MEEEE", data);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};
