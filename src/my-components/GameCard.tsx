import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="320px">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
          // Passing the platform array as props to the PlatformIconList component
        />
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
