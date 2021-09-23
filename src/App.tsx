import { useState } from "react";
import FPSStats from "react-fps-stats";
import classNames from "classnames";
import { KonvaComp } from "./konva/Konva";
import { PixiComp } from "./pixi/Pixi";
import { DomComp } from "./dom/Dom";

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

export enum Version {
  PIXI = "pixi",
  KONVA = "konva",
  DOM = "dom",
}

function App() {
  const [selectedVersion, setSelectedVersion] = useState(Version.DOM);

  return (
    <div className="App">
      <FPSStats left="auto" right="0" />
      <div className="buttons">
        {Object.values(Version).map((version) => (
          <button
            key={version}
            className={classNames({ selected: selectedVersion === version })}
            onClick={() => setSelectedVersion(version)}
          >
            {version}
          </button>
        ))}
      </div>
      {selectedVersion === Version.PIXI ? (
        <PixiComp />
      ) : selectedVersion === Version.KONVA ? (
        <KonvaComp />
      ) : (
        <DomComp />
      )}
    </div>
  );
}

export default App;
