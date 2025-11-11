import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box paddingX={5}>
        <Heading>Oops..</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error happened."}
        </Text>
      </Box>
      {/* <p>
        
      </p> */}
    </>
  );
}

export default ErrorPage;
