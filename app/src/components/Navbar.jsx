import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { setLogOut } from "../state/user";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlerLogOut = (e) => {
    Cookies.remove("token");
    dispatch(setLogOut());
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="gray.800"
      color="white"
    >
      <Flex align="center">
        <Link to="/">
          <Heading as="h4" size="md" letterSpacing={"-.1rem"}>
            TMDB
          </Heading>
        </Link>
        {user.email && (
          <Box ml={4}>
            <Heading as="h5" size="md" letterSpacing={"-.1rem"}>
              Hola, {user.userName}!
            </Heading>
          </Box>
        )}
      </Flex>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ md: "auto" }}
        alignItems="center"
      >
        {user.email ? (
          <Button bg="transparent" border="1px" onClick={handlerLogOut}>
            Cerrar sesión
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button bg="transparent" border="1px" mr={3}>
                Iniciar sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button bg="transparent" border="1px">
                Únete a TMDB
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
};
export default Navbar;
