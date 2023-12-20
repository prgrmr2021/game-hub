import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hook/usePlatforms";
import { Platform } from "../hook/useGames";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  seletedPlatform: Platform | null;
}

const PlatformSelector = ({ seletedPlatform, onSelectPlatform }: Props) => {
  // const [selectedPlatform, setSelectedPlatform] = useState(null);
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {seletedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
