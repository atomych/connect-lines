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
  setLine: (cells: FieldCell[], color: LineColorType) => void;
};
