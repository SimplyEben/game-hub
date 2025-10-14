import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ModeSwitch from "./ModeSwitch";
function NavBar() {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <ModeSwitch />
    </HStack>
  );
}

export default NavBar;
