import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./my-components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Box hideBelow="lg">
          <GridItem area="aside" bg={"yellow.600"}>
            Aside
          </GridItem>
        </Box>

        <GridItem area={"main"} bg={"midnightblue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

//f1c1b13f7d714d8db48c6e15ccccd998
// "@chakra-ui/react": "^3.27.1",
