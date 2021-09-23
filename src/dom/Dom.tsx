import { CompProps } from "../App.types";
import { SIZE } from "../App.utils";
import { DomNote } from "./DomNote";

export const DomComp = ({ artifacts }: CompProps) => {
  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {artifacts.map((a, i) => (
        <DomNote key={i} {...a} />
      ))}
    </div>
  );
};
