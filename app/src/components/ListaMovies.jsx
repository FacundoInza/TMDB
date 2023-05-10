import ItemList from "../commons/ItemList";
import { useSelector } from "react-redux";
import { Input, Box, Flex } from "@chakra-ui/react";
import React from "react";

const ListaMovies = () => {
  const search = useSelector((state) => state.search);

  return (
    <>
      <Flex p="20px">
        <Input placeholder="Type here..." />
      </Flex>
      {/* Lista de películas */}
      <Box flex="1" ml="4">
        {search.map((movie, i) => (
          <ItemList key={movie.id} id={i} movie={movie} />
        ))}
      </Box>
    </>
  );
};
export default ListaMovies;
