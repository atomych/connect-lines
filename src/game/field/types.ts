import { LineColorType } from "@/game/line/types";

export enum FieldCellState {
  Empty = "empty",
  Point = "point",
  Line = "line",
}

export type FieldCell = {
  posX: number;
  posY: number;
  state: {
    type: FieldCellState;
    body?: string | null;
    color?: LineColorType | null;
  };
};

export type FieldRows = {
  cells: FieldCell[];
};

export type FieldSetCellCoords = {
  x: number;
  y: number;
};

export type FieldSetCellOptions = {
  type: FieldCellState;
  body: string | null;
  color: LineColorType | null;
};

export type Field = {
  state: {
    lines: FieldRows[];
    size?: number | null;
  };
  setSize: (size: number) => void;
  setField: () => void;
  setCell: (coords: FieldSetCellCoords, options: FieldSetCellOptions) => void;
};
