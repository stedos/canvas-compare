import { Layer, Stage } from "react-konva";
import { CompProps } from "../App.types";
import { SIZE } from "../App.utils";
import { KonvaNote } from "./KonvaNote";

export const KonvaComp = ({ artifacts }: CompProps) => {
  return (
    <Stage width={SIZE.width} height={SIZE.height}>
      <Layer>
        {artifacts.map((a, i) => (
          <KonvaNote key={i} {...a} />
        ))}
      </Layer>
    </Stage>
  );
};
