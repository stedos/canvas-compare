import { Layer, Stage } from "react-konva";
import { artifacts, SIZE } from "../App";
import { KonvaNote } from "./KonvaNote";

export const KonvaComp = () => {
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
