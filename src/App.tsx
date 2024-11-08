import "./App.css";
import { AppShell, Avatar, Flex, NavLink } from "@mantine/core";
import BoringLogo from "./assets/boring_tools.png";
import { TbHome2 } from "react-icons/tb";
import { ToggleColorScheme } from "./theme/ToggleColorScheme";
import { Loadout } from "./loadout/Loadout";

export function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header px="1rem">
        <Flex
          h="100%"
          style={{
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Avatar src={BoringLogo} radius="md" />
          <Flex h="100%">
            <NavLink label="Home" leftSection={<TbHome2 size="1rem" />} />
            <NavLink href="#required-for-focus" label="Inventory" />
            <NavLink href="#required-for-focus" label="Loadout" />
          </Flex>
          <div style={{ marginLeft: "auto" }}>
            <ToggleColorScheme />
          </div>
        </Flex>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>
        <Loadout />
      </AppShell.Main>
    </AppShell>
  );
}
