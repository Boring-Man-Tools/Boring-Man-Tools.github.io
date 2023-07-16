import { h, FunctionalComponent } from "preact";
import { Footer } from "./components";

export const Home = () => {
  return (
    <main>
      <header>
        <h1>Boring Man Tools</h1>
        <cite>
          <p>
            Collection of tools for the game{" "}
            <a href="https://store.steampowered.com/app/346120/Boring_Man__Online_Tactical_Stickman_Combat/">
              Boring Man - OTSC.
            </a>
          </p>
        </cite>
      </header>

      <section>
        <nav>
          <h3>Map Editor</h3>
          <ul>
            <ToolLi
              href="/map/optimizer/"
              title="Map optimizer"
              description="Replace blocks by wall to reduce the number of map objects."
            />
            <ToolLi
              href="/map/viewer/"
              title="Map viewer"
              description="Display a map. Assets and logic not included."
            />
            <ToolLi
              href="/map/editor"
              title="Map editor"
              description="Prototype of a map editor."
            />
          </ul>
        </nav>
      </section>

      <section>
        <nav>
          <h3>Skins</h3>
          <ul>
            <ToolLi
              href="/skin/generator"
              title="Random skin generator"
              description="Randomly generate a skin."
            />
            <ToolLi
              href="/skin/viewer"
              title="Skin viewer"
              description="Import and see a custom skin for all weapons. Compatible with custom weapons"
            />
            <ToolLi
              href="/skin/support-editor"
              title="Full skin support editor"
              description="Editor for full skin support."
            />
          </ul>
        </nav>
      </section>
    </main>
  );
};

type LiProps = {
  href: string;
  title: string;
  description: string;
};

const ToolLi: FunctionalComponent<LiProps> = ({ href, title, description }) => (
  <li>
    <a href={href}>{title}</a> - {description}
  </li>
);
