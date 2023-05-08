import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import MoviesCollection from "./MoviesCollection";
import Fetch from "../utils";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    Fetch.getPopular().then((movies) => setPopularMovies(movies.results));
    Fetch.getTopRated().then((movies) => setTopRatedMovies(movies.results));
    Fetch.getUpcoming().then((movies) => setUpcomingMovies(movies.results));
  }, []);
  return (
    <div className="content">
      <Buscador />
      <MoviesCollection
        movies={popularMovies}
        nameCollection={"Most Popular"}
      />
      <MoviesCollection movies={topRatedMovies} nameCollection={"Top rated"} />
      <MoviesCollection movies={upcomingMovies} nameCollection={"Up coming"} />
    </div>
  );
};
export default Home;
