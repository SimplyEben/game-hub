import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Spinner, Button } from "@chakra-ui/react";

interface Props {
  //when a genre is selected, the GenreList will notify the App component through this prop (onSelectGenre) which is a function that takes a genre object.
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root marginTop={5}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            {/* passing the selected genre to onSelectGenre to update the state in the App component */}
            <Button
              variant="ghost"
              fontSize="md"
              asChild
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              <a href="#">{genre.name}</a>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
