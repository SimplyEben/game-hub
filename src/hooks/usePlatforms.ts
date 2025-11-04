// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import apiClient, { type FetchResponse } from "@/services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

//fetching data from the backend
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

//fetching data from saved data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

//Fetching data with react query
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
