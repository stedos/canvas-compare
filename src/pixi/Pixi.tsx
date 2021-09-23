import { Stage } from "@inlet/react-pixi";
import { PixiNote } from "./PixiNote";
import { CompProps } from "../App.types";
import { SIZE } from "../App.utils";

export const PixiComp = ({ artifacts }: CompProps) => {
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
