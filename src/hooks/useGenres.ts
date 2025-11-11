// import genres from "@/data/genres";
import genres from "@/data/genres";
import ms from "ms";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Genre } from "../entities/Genre";

/*instead of using the data hook to call the server, we should return an object with 3 properties {data, isLoading, error}. This is to minimize the impact of this change on the consumers of this hook
const useGenres = () => useData<Genre>("/genres");*/

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenres;
