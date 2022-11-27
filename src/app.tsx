import { h } from "preact";
import Router, { Route } from "preact-router";
import "./app.css";
import { Home } from "./home";
export const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route default component={Error404} />
    </Router>
  );
};

const Error404 = () => <>This page does not exist.</>;
