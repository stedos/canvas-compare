import { BitmapText, Container, Graphics } from "@inlet/react-pixi";
import { InteractionData, InteractionEvent } from "@pixi/interaction";
import * as PIXI from "pixi.js";
import { useCallback, useRef, useState } from "react";
import { NoteType } from "../App";
import { getNoteShape } from "../App.utils";

PIXI.BitmapFont.from("TitleFont", {
  fontFamily: "Arial",
  fontSize: 20,
  strokeThickness: 1,
  fill: "black",
});

export const PixiNote: React.FC<NoteType> = ({
  x,
  y,
  size,
  color,
  content,
}) => {
  const ref = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [data, setData] = useState<InteractionData | undefined>();
  const [localX, setLocalX] = useState(x);
  const [localY, setLocalY] = useState(y);

  const parsedColor = parseInt(color.replace(/^#/, ""), 16);

  const draw = useCallback(
    (g: PIXI.Graphics) => {
      g.clear();
      g.beginFill(parsedColor);
      g.drawPolygon(...getNoteShape(size));
      g.endFill();
    },
    [size, parsedColor]
  );

  const onDragStart = useCallback((event: InteractionEvent) => {
    setData(event.data);
    setIsDragging(true);
  }, []);

  const onDragMove = useCallback(() => {
    if (isDragging) {
      const newPosition = data?.getLocalPosition?.(ref?.current?.parent);
      if (!newPosition) return;
      setLocalX(newPosition.x - size / 2);
      setLocalY(newPosition.y - size / 2);
    }
  }, [data, isDragging, size]);

  const onDragEnd = useCallback(() => {
    setData(undefined);
    setIsDragging(false);
  }, []);

  return (
    <Container
      ref={ref}
      anchor={0.5}
      position={[localX, localY]}
      pointerdown={onDragStart}
      pointermove={onDragMove}
      pointerup={onDragEnd}
      pointerupoutside={onDragEnd}
      interactive
    >
      <Graphics x={0} y={0} draw={draw} alpha={isDragging ? 0.5 : 1} />
      <BitmapText
        x={0}
        y={0}
        text={content}
        style={{ fontName: "TitleFont", fontSize: 20, maxWidth: size }}
      />
    </Container>
  );
};
