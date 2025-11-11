import type { Platform } from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
function PlatformIconList({ platforms }: Props) {
  /*Annotating The iconMap object to tell TypeScript that this is an object with string keys/properties  and each key is mapped to a value of type IconType defined in react-icons library.*/
  /*The process below is called An Index Signature. this [key: string] represent a key/property in the object. This prevent us from specifying the name of each key(s) like name:string*/
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playStation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={2}>
        {platforms?.map((platform) => {
          const IconComponent = iconMap[platform.slug];
          return IconComponent ? (
            <Icon as={IconComponent} key={platform.id} color="gray.500" />
          ) : null;
        })}
      </HStack>
    </>
  );
}

/*{platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} key={platform.id} />
        ))}*/
export default PlatformIconList;

{
  /* {game.parent_platforms.map((platform) => (
        <Text>{platform.platform.name}</Text>
      ))} */
}
{
  /* the platform can be destructured as below */
}
{
  /*{game.parent_platforms.map(({platform}) => (
          <Text>{platform.name}</Text>
        ))}  and it has been refactored to the code in the JSX*/
}
