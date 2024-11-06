import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";

export const ToggleColorScheme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  const isDarkMode = computedColorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={isDarkMode ? "yellow" : "blue"}
      onClick={toggleColorScheme}
      title="Toggle color scheme"
    >
      {isDarkMode ? (
        <TbSunHigh style={{ width: 18, height: 18 }} />
      ) : (
        <TbMoonStars style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
};
