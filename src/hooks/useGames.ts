import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  //the parent_platform is an array of objects where each object has a property of platform of type Platform
}

const useGames = () => useData<Game>("/games");

export default useGames;
