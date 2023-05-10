import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setLogOut } from "../state/user";
import React from "react";
import Listafavoritos from "./Listafavoritos";
import useInput from "../hooks/useInput";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const search = useInput();

  const handlerSearchUser = (e) => {
    navigate(`/search/${search.value}`);
  };

  const handlerLogOut = (e) => {
    Cookies.remove("token");
    dispatch(setLogOut());
  };

  return (
    <>
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
            <Heading as="h4" size="lg" letterSpacing={"-.1rem"}>
              TMDB
            </Heading>
          </Link>
          <form onSubmit={handlerSearchUser}>
            <InputGroup ml={"20px"}>
              <InputRightElement
                pointerEvents="none"
                children={<FaSearch color="gray.300" />}
                mr={"40px"}
              />
              <Input
                {...search}
                type="text"
                placeholder="Buscar usuarios"
                borderRadius="full"
                bg="gray.800"
                border="none"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700", border: "none" }}
              />
            </InputGroup>
          </form>
        </Flex>

        <Box
          display={{ base: "none", md: "flex" }}
          width={{ md: "auto" }}
          alignItems="center"
        >
          {user.email ? (
            <>
              <Link to={`/user/${user.id}`}>
                <Tag size="lg" colorScheme="blue" borderRadius="full">
                  <Avatar
                    src={user.imageURL || "https://bit.ly/broken-link"}
                    size="xs"
                    name="Segun Adebayo"
                    ml={-1}
                    mr={2}
                  />
                  <TagLabel>{user.userName}</TagLabel>
                </Tag>
              </Link>

              <Button
                onClick={onOpen}
                ref={btnRef}
                bg="transparent"
                border="1px"
              >
                Favorites Movies
              </Button>

              <Button bg="transparent" border="1px" onClick={handlerLogOut}>
                Cerrar sesión
              </Button>
            </>
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
      <Drawer
        isOpen={isOpen}
        size="lg"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Peliculas favoritas</DrawerHeader>

          <DrawerBody>
            <Listafavoritos favorites={user.favorites} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Navbar;
