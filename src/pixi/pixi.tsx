import {Stage} from "@inlet/react-pixi";
import {PixiNote} from "./PixiNote";
import {SIZE} from "../App";

export const PixiComp = () => {
  return <Stage width={SIZE.width} height={SIZE.height} color={"white"}><PixiNote /></Stage>
};
