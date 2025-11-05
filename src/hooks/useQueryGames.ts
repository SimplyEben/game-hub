import type { GameQuery } from "@/App";
import APIClient, { type FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  //the parent_platform is an array of objects where each object has a property of platform of type Platform
}

const apiClient = new APIClient<Game>("/games");
// we need to pass the selectedGenre to the data hook but our data hook currently only takes an endpoint bu we can make it flexible by given it an axios request config object. Done in the useData hook

/*both refactored to gameQuery selectedGenre: Genre | null,
  selectedPlatform: Platform | null */
// Replacing useQuery with useInfinetQuery so we can fetch data in pages

const useGames = (gameQuery: GameQuery) =>
  //passing the query string parameters to the backend
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    // queryFn receiving the page number as a parameter and destructure it to get pageParam
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
  });
//the selectedGenre is optional so if selectedGenre is null, the genre will also be null.
export default useGames;

//the games hook passes the selectedGenre as a query string parameter to the data hook. We also added an array of dependencies so if any of the dependencies changes, the effect will re-render and fetch the data from the server.
