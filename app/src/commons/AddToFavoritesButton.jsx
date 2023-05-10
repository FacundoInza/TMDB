import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Fetch from "../utils";
import { addFavorite, removeFavorite } from "../state/user";

export function AddToFavoritesButton({ movie }) {
  function hasId(array, id) {
    const item = array.find((item) => item.id === id);
    return item !== undefined;
  }
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favorites = user.favorites;
  console.log("fav:", favorites);
  const [estaEnFavoritos, setEstaEnFavoritos] = useState(
    hasId(favorites, movie.id)
  );

  const handleToggleFavoritos = (e) => {
    if (user.loggedIn) {
      if (estaEnFavoritos) {
        dispatch(removeFavorite(movie));
        setEstaEnFavoritos(false);
        Fetch.removeFavorite(user.id, movie.id).then(({ error, data }) => {
          if (!error) return alert(data);
        });
      } else {
        dispatch(addFavorite(movie));
        setEstaEnFavoritos(true);
        Fetch.addFavorite(user.id, movie.id).then(({ error, data }) => {
          if (!error) return alert(data);
        });
      }
    }
  };

  console.log(estaEnFavoritos);
  return (
    <IconButton
      icon={estaEnFavoritos ? <FaHeart color="red" /> : <FaRegHeart />}
      onClick={handleToggleFavoritos}
      variant="ghost"
      size="md"
      aria-label={
        estaEnFavoritos ? "Remover de favoritos" : "Añadir a favoritos"
      }
    />
  );
}

export default AddToFavoritesButton;
