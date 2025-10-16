import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";

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
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spaceY={5}
        padding="10px"
        gapX={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
