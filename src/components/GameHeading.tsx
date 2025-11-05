import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
// import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
// import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="3xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
