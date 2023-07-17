import { Flex } from "./components";
import { Card } from "./components/Card";

export const Sidebar = () => {
  return (
    <Card style={{ gridArea: "sidebar" }}>
      <Flex style={{ alignItems: "center", gap: "0.25rem" }}>
        <img src="/logo.png" style={{ height: "2rem", width: "2rem" }} />
        <h1 style={{ fontSize: "1.5rem" }}>BM Tools</h1>
      </Flex>

      <Flex style={{ flexDirection: "column" }}>
        <Card style={{ backgroundColor: "var(--background)" }}>
          <ul>
            Skins
            <li>Generator</li>
            <li>Viewer</li>
          </ul>
        </Card>
      </Flex>
    </Card>
  );
};
