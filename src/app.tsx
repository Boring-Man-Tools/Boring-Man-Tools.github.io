import { h } from "preact";
import Router, { Route } from "preact-router";
import { Flex, Footer, SkinViewer } from "./components";
import { Card } from "./components/Card";
import { Sidebar } from "./Sidebar";

export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "20px",
        display: "grid",
        gridTemplateAreas: `
    'sidebar content'
    'footer footer'
    `,
        gridTemplateColumns: "15rem 1fr",
        gridTemplateRows: "1fr auto",
        rowGap: "0.5rem",
        columnGap: "0.5rem",
      }}
    >
      <Sidebar />
      <Card style={{ gridArea: "content" }}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/skin/generator/" component={SkinGenerator} />
          <Route path="/skin/viewer/" component={SkinViewer} />
          <Route default component={Error404} />
        </Router>
      </Card>
      <div style={{ gridArea: "footer" }}>
        <Footer />
      </div>
    </div>
  );
};

const Error404 = () => <>This page does not exist.</>;

const Home = () => {
  return (
    <div>
      <h1>Boring Man Tools</h1>
      <p>
        Collection of tools for the game{" "}
        <a href="https://store.steampowered.com/app/346120/Boring_Man__Online_Tactical_Stickman_Combat/">
          Boring Man - OTSC.
        </a>
      </p>
    </div>
  );
};

const SkinGenerator = () => {
  return (
    <div>
      <h3>Random skin generator</h3>
      <p>Replace blocks by wall to reduce the number of map objects.</p>
    </div>
  );
};
