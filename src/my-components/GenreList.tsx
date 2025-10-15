import useGenres from "@/hooks/useGenres";
import { Box } from "@chakra-ui/react";

function GenreList() {
  const { data } = useGenres();
  return (
    <Box as="ul" marginTop={10}>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </Box>
  );
}

export default GenreList;
