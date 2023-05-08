import Slider from "react-slick";
import Card from "../commons/Card";
import { Link } from "react-router-dom";

const MoviesCollection = ({ movies, nameCollection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    movies && (
      <div className="carousel-container">
        <h4>{nameCollection}</h4>
        <Slider {...settings}>
          {movies.map((movie, i) => (
            <div className="slick-slide" key={i}>
              <Link to={`/movie/${movie.id}`}>
                <Card id={movie.id} movie={movie} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};
export default MoviesCollection;
