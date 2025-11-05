import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((gen) => gen.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (plat) => plat.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="3xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
