import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ModeSwitch from "./ModeSwitch";
import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ModeSwitch />
    </HStack>
  );
}

export default NavBar;
