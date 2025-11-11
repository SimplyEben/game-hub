import useGenre from "@/hooks/useGenre";
// import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
// import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "./store";

// interface Props {
//   gameQuery: GameQuery;
// }

function GameHeading() {
  const genreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="3xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
