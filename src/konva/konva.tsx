import { Text, Group, Layer, Line, Stage } from "react-konva";
import { artifacts, NoteType, SIZE } from "../App";

export const KonvaComp = () => {
  return (
    <Stage width={SIZE.width} height={SIZE.height}>
      <Layer>
        {artifacts.map((a, i) => (
          <Note key={i} {...a} />
        ))}
      </Layer>
    </Stage>
  );
};

export const Note: React.FC<NoteType> = ({ x, y, size, color, content }) => {
  const dogEarSize = size / 10;
  return (
    <Group x={x} y={y} draggable>
      <Line
        points={[
          0,
          0,
          0,
          size,
          size,
          size,
          size,
          dogEarSize,
          size - dogEarSize,
          0,
        ]}
        fill={color}
        closed
      />
      <Text
        width={size}
        height={size}
        text={content}
        fill="black"
        padding={10}
        fontSize={20}
      />
    </Group>
  );
};
