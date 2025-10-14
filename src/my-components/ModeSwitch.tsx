import { useColorMode } from "@/components/ui/color-mode";
import { Button } from "@chakra-ui/react";

function ModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="outline" onClick={toggleColorMode} colorPalette="green">
      {colorMode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}

export default ModeSwitch;
