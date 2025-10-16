import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./my-components/NavBar";
import GameGrid from "./my-components/GameGrid";
import GenreList from "./my-components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./my-components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./my-components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  /*the  selectedGenre variable can either hold the Genre object or null.
 const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);*/

  /*a state variable for keeping track of the selected platform. when the platform changes we pass the selected platform to the GameGrid for filtering
const [selectedPlatform, setSelecetedPlatform] = useState<Platform | null>(
    null
  );*/

  //refactoring our state hooks selectedPlatform and selectedGenre to a gameQuery hook
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Box>

        <GridItem area={"main"}>
          <HStack spaceX={2} paddingLeft={2.5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

/*
before refactoring to gameQuery
<GenreList selectedGenre={selectedGenre}
onSelectGenre={(genre) => setSelectedGenre(genre)}
/>
*/

/*before refactoring to gameQuery
<PlatformSelector selectedPlatform={selectedPlatform}
onSelectPlatform={(platform) => setSelectedPlatform(platform)}
/>
*/

/*before refactoring to gameQuery
<GameGrid
selectedPlatform={selectedPlatform}
selectedGenre={selectedGenre}
/> */

//f1c1b13f7d714d8db48c6e15ccccd998
// "@chakra-ui/react": "^3.27.1",
