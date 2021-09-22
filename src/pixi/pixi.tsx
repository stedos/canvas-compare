import { Stage } from "@inlet/react-pixi";
import { PixiNote } from "./PixiNote";
import { artifacts, SIZE } from "../App";

export const PixiComp = () => {
  return (
    <Stage
      width={SIZE.width}
      height={SIZE.height}
      options={{ backgroundColor: 0xfafafa }}
    >
      {artifacts.map((artifact, index) => (
        <PixiNote key={index} {...artifact} />
      ))}
    </Stage>
  );
};
