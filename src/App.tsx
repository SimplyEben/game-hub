import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./my-components/NavBar";
import GameGrid from "./my-components/GameGrid";
import GenreList from "./my-components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  //the  selectedGenre variable can either hold the Genre object or null.
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Box hideBelow="lg">
          {/* passing the props that take the genre object to the GenreList component*/}
          <GridItem area="aside" paddingX={5}>
            {/* passing a prop as a function that takes the selected genre object and call => setSelectedGenre(genre)*/}
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Box>

        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

//f1c1b13f7d714d8db48c6e15ccccd998
// "@chakra-ui/react": "^3.27.1",
