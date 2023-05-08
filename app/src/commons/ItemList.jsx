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

const ItemList = ({ movie }) => {
  const handleAddToFavorites = (e) => {};
  const URLimage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={URLimage}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{movie.title}</Heading>

          <Text py="2">{movie.overview}</Text>
        </CardBody>

        <CardFooter>
          <AddToFavoritesButton props={{ onclick: { handleAddToFavorites } }} />
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ItemList;
