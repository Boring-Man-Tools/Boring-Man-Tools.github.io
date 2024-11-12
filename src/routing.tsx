import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { Loadout } from "./loadout/Loadout";

export type ValidRoute = "/" | "/loadout/";

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
