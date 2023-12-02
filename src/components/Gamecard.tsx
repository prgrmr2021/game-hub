import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGames";
import PlatformIconList from "./PlatformIconList";

interface IProps {
  game: Game;
}

const Gamecard: React.FC<IProps> = ({ game }: IProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
