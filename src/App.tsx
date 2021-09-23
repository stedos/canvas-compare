import { useMemo, useState } from "react";
import FPSStats from "react-fps-stats";
import classNames from "classnames";
import { KonvaComp } from "./konva/Konva";
import { PixiComp } from "./pixi/Pixi";
import { DomComp } from "./dom/Dom";
import { RenderVersion } from "./App.types";
import { getArtifacts } from "./App.utils";

function App() {
  const [selectedVersion, setSelectedVersion] = useState(RenderVersion.PIXI);
  const [noOfArtifacts, setNoOfArtifacts] = useState(100);

  const artifacts = useMemo(() => getArtifacts(noOfArtifacts), [noOfArtifacts]);

  return (
    <div className="App">
      <FPSStats left="auto" right="0" />
      <div className="buttons">
        {Object.values(RenderVersion).map((version) => (
          <button
            key={version}
            className={classNames({ selected: selectedVersion === version })}
            onClick={() => setSelectedVersion(version)}
          >
            {version}
          </button>
        ))}
        {Object.values([5, 100, 500, 1000, 5000]).map((value) => (
          <button
            key={value}
            className={classNames({ selected: value === noOfArtifacts })}
            onClick={() => setNoOfArtifacts(value)}
          >
            {value}
          </button>
        ))}
      </div>
      {selectedVersion === RenderVersion.PIXI ? (
        <PixiComp artifacts={artifacts} />
      ) : selectedVersion === RenderVersion.KONVA ? (
        <KonvaComp artifacts={artifacts} />
      ) : (
        <DomComp artifacts={artifacts} />
      )}
    </div>
  );
}

export default App;
