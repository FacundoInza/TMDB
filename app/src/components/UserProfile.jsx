import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../utils";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import Listafavoritos from "./Listafavoritos";

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    Fetch.getUser(userId)
      .then(({ error, data }) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {" "}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyItems="center"
        bg="gray.800"
        color="white"
        py={12}
        px={6}
      >
        <Avatar
          size="2xl"
          src={user.imageURL || "https://bit.ly/broken-link"}
          mb={4}
        />
        <Box>
          <Heading as="h1" size="lg" mb={2} textAlign="center">
            {user.userName}
          </Heading>
        </Box>
      </Flex>
      <Box>
        <Heading as="h1" size="lg" mb={2} textAlign="center" m={"40px"}>
          Peliculas favoritas
        </Heading>
        <Listafavoritos favorites={user.favorites} />
      </Box>
    </>
  );
}

export default UserProfile;
