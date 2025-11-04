// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//fetching data from the backend
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

//fetching data from saved data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

//Fetching data with react query
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, next: null, results: platforms },
  });

export default usePlatforms;
