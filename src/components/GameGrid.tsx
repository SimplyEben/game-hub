import useQueryGames from "@/hooks/useQueryGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
// import useGames from "@/hooks/useGames";
import type { GameQuery } from "@/App";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//Passing the selectedGenre to the GameGrid so that it can be passed to the backend when fetching the games
interface Props {
  gameQuery: GameQuery;
}
// selectedGenre: Genre | null;
// selectedPlatform: Platform | null;

function GameGrid({ gameQuery }: Props) {
  /* passing the selectedGenre and selectedPlatform as an argument to the games hook
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);*/

  // instead of passing multiple argument to the games hook we pass qameQuery which contains the 2 argument or anything we need
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useQueryGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const fetchGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      hasMore={!!hasNextPage}
      dataLength={fetchGamesCount}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spaceY={5}
        gapX={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
