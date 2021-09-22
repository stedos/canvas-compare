import React, { useState } from "react";
import { KonvaComp } from "./konva/konva";
import { PixiComp } from "./pixi/pixi";

export const SIZE = {
  width: 3840,
  height: 2160,
};

export const artifacts = Array(100).fill({
  x: 0,
  y: 0,
  size: 100,
  content: "some content",
});

function App() {
  const [isPixi, setIsPixi] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsPixi(!isPixi)} />
      {isPixi ? <PixiComp /> : <KonvaComp />}
    </div>
  );
}

export default App;
