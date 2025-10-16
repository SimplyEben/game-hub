import { Button, Menu, Portal } from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: Relevance
          <ChevronDownIcon />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="">Relevance</Menu.Item>
            <Menu.Item value="">Date added</Menu.Item>
            <Menu.Item value="">Name</Menu.Item>
            <Menu.Item value="">Release date</Menu.Item>
            <Menu.Item value="">Popularity</Menu.Item>
            <Menu.Item value="">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
