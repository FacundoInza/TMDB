import { Button } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export function AddToFavoritesButton(props) {
  return (
    <Button
      leftIcon={<FaStar />}
      colorScheme="yellow"
      variant="outline"
      {...props}
    >
      Añadir a favoritos
    </Button>
  );
}

export default AddToFavoritesButton;
