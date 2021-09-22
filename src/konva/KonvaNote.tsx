import { Text, Group, Line } from "react-konva";
import { NoteType } from "../App";
import { getNoteShape } from "../App.utils";

export const KonvaNote: React.FC<NoteType> = ({
  x,
  y,
  size,
  color,
  content,
}) => {
  return (
    <Group x={x} y={y} draggable>
      <Line points={getNoteShape(size)} fill={color} closed />
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
