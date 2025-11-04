// import genres from "@/data/genres";
import genres from "@/data/genres";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/*instead of using the data hook to call the server, we should return an object with 3 properties {data, isLoading, error}. This is to minimize the impact of this change on the consumers of this hook
const useGenres = () => useData<Genre>("/genres");*/

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
