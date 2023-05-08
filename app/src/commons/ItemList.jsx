const ItemList = ({ movie }) => {
  const URLimage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="card">
      <div className="card-image">
        <img src={URLimage} alt="" />
      </div>
      <div className="card-details">
        <div class="card-title">
          <h2>{movie.title}</h2>
        </div>
        <div className="card-info">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemList;
