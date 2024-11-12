import { Flex, Stack, Title } from "@mantine/core";
import { Link as RLink } from "react-router-dom";
import { ValidRoute } from "./routing";

type PageLink = {
  route: ValidRoute;
  text: string;
  description: string;
};
type Section = {
  title: string;
  links: PageLink[];
};
const sections: Section[] = [
  {
    title: "Weapon",
    links: [
      {
        route: "/loadout/",
        text: "Loadout creator",
        description:
          "Create your own loadout. You can generate a loadout randomly too!",
      },
    ],
  },
];

export const Home = () => (
  <Stack>
    {sections.map((section) => (
      <>
        <Title order={2}>{section.title}</Title>
        {section.links.map((link) => (
          <PageLinkComponent {...link} />
        ))}
      </>
    ))}
  </Stack>
);

const PageLinkComponent = ({ route, text, description }: PageLink) => (
  <Flex>
    <RLink to={route} style={{ textDecoration: "none" }}>
      {text}
    </RLink>
    : {description}
  </Flex>
);
