import { h } from "preact";
import Router, { Route } from "preact-router";
import "./app.css";
import { Flex, Footer, SkinViewer } from "./components";
import { Home } from "./home";
import { SkinGenerator } from "./skins/generator";

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
      }}
    >
      <div style={{ gridArea: "sidebar" }}>sidebar</div>
      <div style={{ gridArea: "content", marginBottom: "auto" }}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/skin/generator/" component={SkinGenerator} />
          <Route path="/skin/viewer/" component={SkinViewer} />
          <Route default component={Error404} />
        </Router>
      </div>
      <div style={{ gridArea: "footer" }}>
        <Footer />
      </div>
    </div>
  );
};

const Error404 = () => <>This page does not exist.</>;
