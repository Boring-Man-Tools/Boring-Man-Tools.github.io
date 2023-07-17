import { JSX } from "preact";
import { JSXInternal } from "preact/src/jsx";

type FlexProps = {
  style?: Partial<JSXInternal.CSSProperties>;
  children: JSX.Element[] | JSX.Element | string;
};
export const Flex = ({ children, style }: FlexProps) => (
  <div style={{ display: "flex", flexDirection: "row", ...style }}>
    {children}
  </div>
);
