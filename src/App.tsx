import { Grid, GridItem, HStack, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import Platformselector from "./components/Platformselector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}

function App() {
 const[gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      )}

      <GridItem area="main" paddingX={3}>
        <HStack spacing={3} paddingLeft={3} marginBottom={4}>
          <Platformselector selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
