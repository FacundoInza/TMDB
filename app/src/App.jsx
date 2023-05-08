import { Route, Routes } from "react-router-dom";
import ListaMovies from "./components/ListaMovies";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Fetch from "./utils";
import Movie from "./components/Movie";
import Home from "./components/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchValidate = Fetch.userValidate();
    dispatchValidate(dispatch);
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<ListaMovies />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </>
  );
};
export default App;
