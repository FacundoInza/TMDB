import "../assets/cardFavorite.css";

const CardFavorite = ({ movie }) => {
  const URL = `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div class="container">
      <div
        class="card_box"
        style={{
          backgroundImage: URL,
        }}
      >
        <span></span>
      </div>
    </div>
  );
};
export default CardFavorite;
