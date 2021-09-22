import React, { useState } from "react";
import { KonvaComp } from "./konva/konva";
import { PixiComp } from "./pixi/pixi";

export const SIZE = {
  width: 3840,
  height: 2160,
};

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
