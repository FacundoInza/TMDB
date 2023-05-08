import ItemList from "../commons/ItemList";
import { useSelector } from "react-redux";

const ListaMovies = () => {
  const movies = useSelector((state) => state.movies);
  console.log("movies:", movies);
  return (
    <div>
      <h3>Busqueda</h3>
      {movies.results.map((movie, i) => (
        <ItemList id={i} movie={movie} />
      ))}
    </div>
  );
};
export default ListaMovies;
