import type { FieldCell } from "@/game/field/types";

export enum LineColorType {
  Red = "red",
  Green = "green",
  Blue = "blue",
  Yellow = "yellow",
}

export type GameLine = {
  completed: boolean;
  cells: FieldCell[];
  colorType: LineColorType;
};

export type Line = {
  state: {
    lines: GameLine[];
  };
  updateLine: (cells: FieldCell[]) => void;
  resetLine: (colorType: LineColorType) => void;
  getCellsBefore: (cell: FieldCell) => FieldCell[];
};
