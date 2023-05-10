import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import AddToFavoritesButton from "./AddToFavoritesButton";
import { Link } from "react-router-dom";

const ItemList = ({ movie }) => {
  const URLimage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Link to={`/movie/${movie.id}`}>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={URLimage}
          alt="Caffe Latte"
        />
      </Link>

      <Stack>
        <CardBody>
          <Link to={`/movie/${movie.id}`}>
            <Heading size="md">{movie.title}</Heading>
          </Link>

          <Text py="2">{movie.overview}</Text>
        </CardBody>

        <CardFooter>
          <AddToFavoritesButton movie={movie} />
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ItemList;
