import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      marginTop={5}
      _hover={{
        transform: "scale(1.03)",
      }}
      transition="transform .15s ease-in"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
