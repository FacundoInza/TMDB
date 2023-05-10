import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardFavorite from "../commons/CardFavorite";

const Listafavoritos = ({ favorites }) => {
  return (
    favorites && (
      <Flex flexWrap="wrap" justifyContent="center">
        {favorites.map((movie) => (
          <Box key={movie.id} mx={4} mb={8}>
            <Link to={`/movie/${movie.id}`} target="_top">
              <CardFavorite movie={movie} />
            </Link>
          </Box>
        ))}
      </Flex>
    )
  );
};

export default Listafavoritos;
