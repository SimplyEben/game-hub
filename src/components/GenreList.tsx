import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface Props {
  //when a genre is selected, the GenreList will notify the App component through this prop (onSelectGenre) which is a function that takes a genre object.
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px" listStyle="none">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* passing the selected genre to onSelectGenre to update the state in the App component */}
              <Button
                variant="ghost"
                fontSize="lg"
                as="a"
                whiteSpace="normal"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                paddingLeft="3px"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
