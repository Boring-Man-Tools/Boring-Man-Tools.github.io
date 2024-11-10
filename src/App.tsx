import "./App.css";
import { AppShell, Avatar, Flex, NavLink, NavLinkProps } from "@mantine/core";
import BoringLogo from "./assets/boring_tools.png";
import { TbHome2 } from "react-icons/tb";
import { ToggleColorScheme } from "./theme/ToggleColorScheme";
import { Loadout } from "./loadout/Loadout";
import {
  createHashRouter,
  Outlet,
  Link as RLink,
  LinkProps as RLinkProps,
  useLocation,
} from "react-router-dom";
import { ReactNode } from "react";

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
            <CustomNavLink
              to="/"
              label="Home"
              leftSection={<TbHome2 size="1rem" />}
            />
            <CustomNavLink to="/loadout/" label="Loadout" />
          </Flex>
          <div style={{ marginLeft: "auto" }}>
            <ToggleColorScheme />
          </div>
        </Flex>
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

type CustomNavLinkProps = Omit<NavLinkProps, "to" | "active"> & {
  to: "/" | `/${string}/`;
};
const CustomNavLink = ({ to, ...navLinkProps }: CustomNavLinkProps) => {
  // const finalTo = to === "/" ? "/boringman-tools/" : `/boringman-tools${to}`;
  const location = useLocation();
  const isActiveLink = location.pathname === to;

  const RouterLink = ({
    children,
    ...rest
  }: { children: ReactNode } & Omit<RLinkProps, "to">) => (
    <RLink to={to} {...rest}>
      {children}
    </RLink>
  );

  return (
    <NavLink {...navLinkProps} component={RouterLink} active={isActiveLink} />
  );
};

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "loadout/",
        element: <Loadout />,
      },
    ],
  },
]);