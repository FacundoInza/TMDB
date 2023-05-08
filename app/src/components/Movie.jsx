import { Box, Text, VStack } from "@chakra-ui/react";
import "../assets/movie.css";
import { useParams } from "react-router-dom";
import Fetch from "../utils";
import { useEffect, useState } from "react";
import ColorThief from "colorthief";

const Movie = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const url = `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`;

  useEffect(() => {
    console.log(movieId);
    Fetch.getMovie(movieId)
      .then((movie) => setMovie(movie))
      .catch((error) => console.error(error));
  }, []);

  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)");

  useEffect(() => {
    // Crear una instancia de ColorThief
    const colorThief = new ColorThief();

    // Crear una referencia a la imagen de fondo
    const bgImage = new Image();
    bgImage.crossOrigin = "Anonymous"; // Esto es necesario para evitar errores CORS
    bgImage.src = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

    // Escuchar el evento 'load' de la imagen de fondo
    bgImage.addEventListener("load", () => {
      // Extraer el color dominante de la imagen
      const [r, g, b] = colorThief.getColor(bgImage);

      // Crear el gradiente lineal con el color extraído y transparencia del 50%
      setBackgroundColor(
        `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0.5))`
      );
    });
  }, [movie]);

  return (
    movie && (
      <Box display="flex" justifyContent="center" alignItems="center" mt="15">
        <Box
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          position="relative"
          w="100%"
          bgImage={url}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          height="600px"
          width="100%"
        >
          <Box bg={backgroundColor} m="0px" w="100%" h="100%">
            <Box display="flex" alignItems="center" mb="18" ml="20%">
              <Box boxSize="300px" objectFit="cover" mr="4" m="50px">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Box>
              <VStack align="start">
                <Text fontSize="3xl" fontWeight="bold" color="white">
                  {movie.title}
                </Text>
                <Text fontSize="lg" color="white">
                  Fecha de lanzamiento:{" "}
                </Text>
                <Text fontSize="md" color="white">
                  des
                </Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};
export default Movie;
