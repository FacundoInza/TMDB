import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fetch from "../utils/index";

const Buscador = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchSearch = async function (search) {
      try {
        const dispatchSearch = await Fetch.search(search);
        dispatchSearch(dispatch);
        navigate("/search");
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearch(search);
  };

  return (
    <section>
      <h3>Bienvenidos</h3>
      <h5>
        Millones de películas, programas de televisión y personas por descubrir.
        Explora ahora.
      </h5>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={search} required />
          <button type="submit" required>
            search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Buscador;
