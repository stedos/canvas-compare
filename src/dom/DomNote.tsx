import { useRef } from "react";
import Draggable from "react-draggable";
import { NoteType } from "../App.types";

export const DomNote: React.FC<NoteType> = ({ x, y, size, color, content }) => {
  const ref = useRef(null);
  return (
    <Draggable bounds="parent" defaultPosition={{ x, y }} nodeRef={ref}>
      <div
        ref={ref}
        style={{
          width: size,
          height: size,
          background: color,
          position: "absolute",
        }}
      >
        {content}
      </div>
    </Draggable>
  );
};
