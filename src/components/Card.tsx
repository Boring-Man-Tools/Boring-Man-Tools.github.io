import { JSX } from "preact";
import { JSXInternal } from "preact/src/jsx";

export type CardProps = {
  style?: Partial<JSXInternal.CSSProperties>;
  children: JSX.Element[] | JSX.Element | string;
};
export const Card = ({ children, style }: CardProps) => (
  <div
    style={{
      backgroundColor: "var(--background-alt)",
      padding: "1rem",
      borderRadius: "1rem",
      ...style,
    }}
  >
    {children}
  </div>
);
