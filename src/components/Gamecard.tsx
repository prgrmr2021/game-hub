import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hook/useGames"

interface IProps {
    game: Game
}

const Gamecard: React.FC<IProps> = ({game}: IProps) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default Gamecard