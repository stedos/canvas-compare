import React, { useState } from "react";
import { KonvaComp } from "./konva/konva";
import { PixiComp } from "./pixi/pixi";
import FPSStats from "react-fps-stats";

export type NoteType = {
  x: number;
  y: number;
  size: number;
  content: string;
  color: string;
};

export const SIZE = {
  width: 3840,
  height: 2160,
};

export const artifacts: NoteType[] = Array(100)
  .fill({
    x: 0,
    y: 0,
    size: 100,
    color: "#90EE90",
    content: "some content",
  })
  .map((a) => ({
    ...a,
    x: Math.random() * SIZE.width,
    y: Math.random() * SIZE.height,
  }));

function App() {
  const [isPixi, setIsPixi] = useState(true);

  return (
    <div className="App">
      <FPSStats right={0} />
      <button onClick={() => setIsPixi(!isPixi)}>
        Using: {isPixi ? "Pixi" : "Konva"} (press to toggle)
      </button>
      {isPixi ? <PixiComp /> : <KonvaComp />}
    </div>
  );
}

export default App;
