import ItemList from "../commons/ItemList";
import { useSelector } from "react-redux";
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ListaMovies = () => {
  const movies = useSelector((state) => state.movies);
  console.log("movies:", movies);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      {/* Contenedor del buscador y la lista de favoritos */}
      <div>
        {/* Buscador */}
        <InputGroup>
          <InputLeftElement pointerEvents="none" />
          <Input type="text" placeholder="Buscar películas" />
          <IconButton icon={<SearchIcon />} aria-label="Buscar" ml={2} />
        </InputGroup>

        {/* Botón de favoritos */}
        <IconButton
          icon={<StarIcon />}
          aria-label="Abrir lista de favoritos"
          mb="4"
        />

        {/* Barra lateral de favoritos */}
        <Drawer placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Lista de favoritos</DrawerHeader>
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Lista de películas */}
      <Box flex="1" ml="4">
        {movies.results.map((movie, i) => (
          <Link to={`/movie/${movie.id}`}>
            <ItemList key={movie.id} id={i} movie={movie} />
          </Link>
        ))}
      </Box>
    </div>
  );
};
export default ListaMovies;
