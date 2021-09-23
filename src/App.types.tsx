export type NoteType = {
  x: number;
  y: number;
  size: number;
  content: string;
  color: string;
};

export type CompProps = { artifacts: NoteType[] };

export enum RenderVersion {
  PIXI = "pixi",
  KONVA = "konva",
  DOM = "dom",
}
