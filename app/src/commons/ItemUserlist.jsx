import { Avatar, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemUserlist = ({ user }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Link to={`/user/${user.id}`}>
        <Avatar
          size="2xl"
          src={user.imageURL || "https://bit.ly/broken-link"}
          mb={4}
        />
      </Link>

      <Stack>
        <CardBody>
          <Link to={`/user/${user.id}`}>
            <Heading size="md">{user.userName}</Heading>
          </Link>
        </CardBody>
      </Stack>
    </Card>
  );
};
export default ItemUserlist;
