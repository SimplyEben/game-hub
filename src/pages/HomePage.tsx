import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Flex, GridItem } from "@chakra-ui/react";
import { Grid, Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Box hideBelow="lg">
        {/* passing the props that take the genre object to the GenreList component*/}
        <GridItem area="aside" paddingX={5}>
          {/* passing a prop as a function that takes the selected genre object and call => setSelectedGenre(genre)*/}
          <GenreList />
        </GridItem>
      </Box>

      <GridItem area={"main"}>
        <Box paddingLeft={2.5}>
          <GameHeading />
          <Flex gapX={5}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
