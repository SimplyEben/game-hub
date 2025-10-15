import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text } from "@chakra-ui/react";

function GenreList() {
  const { data } = useGenres();
  return (
    <List.Root marginTop={5}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
