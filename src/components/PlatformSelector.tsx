import usePlatform from "@/hooks/usePlatform";
import type { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" colorPalette="gray.500">
          {selectedPlatform?.name || "Platforms"}
          <ChevronDownIcon />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                value={platform.name}
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
