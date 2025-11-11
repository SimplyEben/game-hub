import { Heading, Image, HStack, Card, CardBody } from "@chakra-ui/react";
import type { Game } from "@/entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
            // Passing the platform array as props to the PlatformIconList component
          />

          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>

          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;

{
  /*<Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
            // Passing the platform array as props to the PlatformIconList component
          />

          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>*/
}
