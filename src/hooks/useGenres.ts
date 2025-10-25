// import genres from "@/data/genres";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "./useData";
import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/*instead of using the data hook to call the server, we should return an object with 3 properties {data, isLoading, error}. This is to minimize the impact of this change on the consumers of this hook
const useGenres = () => useData<Genre>("/genres");*/

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
