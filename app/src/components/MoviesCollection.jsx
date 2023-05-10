import Slider from "react-slick";
import CardMovie from "../commons/CardMovie";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const MoviesCollection = ({ movies, nameCollection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    movies && (
      <div className="carousel-container">
        <Box>
          <h5>{nameCollection}</h5>
        </Box>

        <Slider {...settings}>
          {movies.map((movie, i) => (
            <div className="slick-slide" key={i}>
              <Link to={`/movie/${movie.id}`}>
                <CardMovie id={movie.id} movie={movie} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};
export default MoviesCollection;
