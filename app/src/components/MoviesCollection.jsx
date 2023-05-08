import Slider from "react-slick";
import Card from "../commons/Card";

const MoviesCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="carousel-container">
      <h4>NAME COLLECTION</h4>
      <Slider {...settings}>
        <div className="slick-slide">
          <Card />
        </div>
        <div className="slick-slide">
          <Card />
        </div>
        <div className="slick-slide">
          <Card />
        </div>
      </Slider>
    </div>
  );
};
export default MoviesCollection;
