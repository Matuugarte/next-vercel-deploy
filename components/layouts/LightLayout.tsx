import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const LightLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderRadius: "5px",
        padding: "30px",
      }}>
      <h3>Light-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
