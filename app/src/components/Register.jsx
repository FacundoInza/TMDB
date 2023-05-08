import {
  Input,
  VStack,
  FormControl,
  FormLabel,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegister } from "../state/user";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useInput();
  const userName = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: email.value,
      userName: userName.value,
      password: password.value,
    };
    dispatch(setRegister(newUser));
    navigate("/login");
  };
  return (
    <Box bg="gray.50" h="80vh">
      <Center h="100%">
        <Box bg="white" w="400px" p={8} borderRadius="lg" boxShadow="lg">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" required {...email} />
              </FormControl>

              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="name" required {...userName} />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" required {...password} />
              </FormControl>

              <Button type="submit" colorScheme="blue">
                Register
              </Button>
            </VStack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};
export default Register;
