import "../assets/card.css";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      ></div>
      <span className="title">{movie.title}</span>
      <span className="price">{movie.release_date}</span>
    </div>
  );
};
export default Card;
