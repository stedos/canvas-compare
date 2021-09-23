import { NoteType } from "./App.types";

export const SIZE = {
  width: 3840,
  height: 2160,
};

export const getNoteShape = (size: number) => [
  0,
  0,
  0,
  size,
  size,
  size,
  size,
  size / 10,
  size - size / 10,
  0,
];

export const getArtifacts = (count: number): NoteType[] =>
  Array(count)
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
