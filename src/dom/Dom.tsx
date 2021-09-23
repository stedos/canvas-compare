import { artifacts, SIZE } from "../App";
import { DomNote } from "./DomNote";

export const DomComp = () => {
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
