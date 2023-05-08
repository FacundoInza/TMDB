import { Route, Routes } from "react-router-dom";
import Buscador from "./components/Buscador";
import ListaMovies from "./components/ListaMovies";
import MoviesCollection from "./components/MoviesCollection";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Fetch from "./utils";

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
        <Route
          path="/"
          element={
            <div className="content">
              <Buscador />
              <MoviesCollection />
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<ListaMovies />} />
      </Routes>
    </>
  );
};
export default App;
