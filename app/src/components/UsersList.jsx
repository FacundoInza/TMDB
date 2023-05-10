import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ItemUserlist from "../commons/ItemUserlist";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { URLAPI } from "../config";
import { setSearchUser } from "../state/search";

const UsersList = () => {
  const { query } = useParams();
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  console.log(search);

  useEffect(() => {
    axios
      .get(`${URLAPI}search/users?query=${query}`)
      .then(({ data }) => {
        console.log("users", data);
        dispatch(setSearchUser(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    search && (
      <Box flex="1" ml="4">
        {search.map((user, i) => (
          <ItemUserlist key={i} user={user} />
        ))}
      </Box>
    )
  );
};
export default UsersList;
