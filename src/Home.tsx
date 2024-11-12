import { Anchor, Divider, Flex, List, Stack, Text, Title } from "@mantine/core";
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
    title: "Weapons",
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

type ExternalPageLink = Omit<PageLink, "route"> & {
  href: string;
  note?: string;
};
type ExternalSection = {
  title: string;
  links: ExternalPageLink[];
};
const externalSections: ExternalSection[] = [
  {
    title: "Map making",
    links: [
      {
        href: "https://shaigrorb.github.io/bm-maps-optimizer/",
        text: "bm-maps-optimizer",
        description: "Tool to optimize a map by replacing blocks by walls",
      },
      {
        href: "https://boring-man-tools.github.io/bmap-to-json/bmap-txt/",
        text: "bmap.txt documentation",
        description: "Documents what bmap.txt is",
        note: "missing info",
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        href: "https://boring-man-tools.github.io/bingosync-objectives-generator/",
        text: "Bingo objectives generator",
        description: "Generate bingo objectives to be used via Bingosync",
      },
    ],
  },
  {
    title: "RCON",
    links: [
      {
        href: "https://github.com/coyote963/bmio",
        text: "bmio",
        description: "Python lib for RCON scripting",
      },
      {
        href: "https://github.com/ShaigroRB/bm-rcon",
        text: "bm-rcon",
        description: "C# lib for RCON scripting",
        note: "archived repository",
      },
      {
        href: "https://github.com/Spasman/rcon_example",
        text: "rcon_example",
        description:
          "Python 3 example for communicating with the Boring Man v2.0.0 RCON port",
        note: "made by Spasman",
      },
    ],
  },
  {
    title: "Server hosting",
    links: [
      {
        href: "https://boring-man-tools.github.io/maps-gamemodes-support/",
        text: "Maps gamemodes support",
        description: "Gamemode stats for all the maps on the Steam workshop",
        note: "last update on Nov 13 2024",
      },
    ],
  },
  {
    title: "Weapon skins",
    links: [
      {
        href: "https://shaigrorb.github.io/random-generators-boring-man/skin-generator.html",
        text: "Random skins generator",
        description:
          "Generator of random skins. A preview of the skin is available.",
      },
    ],
  },
  {
    title: "Wikis",
    links: [
      {
        href: "https://wiki.boringman.org",
        text: "English wiki",
        description: "Hosted by Coyote. Easy to contribute.",
        note: "often down",
      },
      {
        href: "https://boring-man-tools.github.io/wiki/",
        text: "English wiki",
        description: "Hosted on GitHub",
        note: "missing a lot of info",
      },
      {
        href: "https://boringman.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5",
        text: "Chinese wiki",
        description:
          "Probably the most up-to-date. Dunno, can't read ¯\\_(ツ)_/¯",
        note: "includes info about other Boring Man games",
      },
      {
        href: "https://boring-man.fandom.com/wiki/Boring_Man_Wiki",
        text: "English wiki",
        description: "Wiki for Boring Man - OTSC v1",
      },
    ],
  },
];

export const Home = () => (
  <Stack>
    <Divider
      my="md"
      label={<Title order={2}>Tools on this website</Title>}
      labelPosition="center"
    />
    {sections.map((section) => (
      <>
        <Title order={3}>{section.title}</Title>
        <List>
          {section.links.map((link) => (
            <List.Item>
              <InternalLink {...link} />
            </List.Item>
          ))}
        </List>
      </>
    ))}

    <Divider
      my="md"
      label={<Title order={2}>Other tools & links</Title>}
      labelPosition="center"
    />
    {externalSections.map((section) => (
      <>
        <Title order={3}>{section.title}</Title>
        <List>
          {section.links.map((link) => (
            <List.Item>
              <ExternalLink {...link} />
            </List.Item>
          ))}
        </List>
      </>
    ))}
  </Stack>
);

const InternalLink = ({ route, text, description }: PageLink) => (
  <Flex>
    <RLink to={route} style={{ textDecoration: "none" }}>
      <Anchor>{text}</Anchor>
    </RLink>
    : {description}
  </Flex>
);

const ExternalLink = ({ href, text, description, note }: ExternalPageLink) => (
  <Flex style={{ alignSelf: "flex-start" }}>
    <Anchor href={href} target="_blank">
      {text}
    </Anchor>
    : {description}
    {note != null && (
      <Text fs="italic" component="span" ml="xs">
        ({note})
      </Text>
    )}
  </Flex>
);
