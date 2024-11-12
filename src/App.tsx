import { AppShell, Avatar, Flex, NavLink, NavLinkProps } from "@mantine/core";
import BoringLogo from "./assets/boring_tools.png";
import { TbHome2 } from "react-icons/tb";
import { ToggleColorScheme } from "./theme/ToggleColorScheme";
import {
  Outlet,
  Link as RLink,
  LinkProps as RLinkProps,
  useLocation,
} from "react-router-dom";
import { ReactNode } from "react";
import { Home } from "./Home";
import { ValidRoute } from "./routing";

export function App() {
  const location = useLocation();
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
      <AppShell.Main>
        {location.pathname === "/" && <Home />}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

type CustomNavLinkProps = Omit<NavLinkProps, "to" | "active"> & {
  to: ValidRoute;
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
