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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Fetch from "../utils";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      email: email.value,
      password: password.value,
    };
    const dispatchUser = Fetch.userLogin(logUser);
    dispatchUser(dispatch);
    navigate("/");
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

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" required {...password} />
              </FormControl>

              <Button type="submit" colorScheme="blue">
                Log in
              </Button>
            </VStack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;
