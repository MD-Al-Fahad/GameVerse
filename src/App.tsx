import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import Platformselector from "./components/Platformselector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedgenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedgenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      )}

      <GridItem area="main" paddingX={3}>
        <Platformselector selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedgenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
