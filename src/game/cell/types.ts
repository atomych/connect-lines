import type { FieldCellState } from "@/game/field/types";
import type { LineColorType } from "@/game/line/types";
import type { FieldCell } from "@/game/field/types";

export type Cell = {
  POINT: {
    red: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    blue: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    green: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    yellow: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
  };
  setStateType: (cell: FieldCell, state: FieldCellState) => void;
  getDisplayClasses: (
    prevCell: FieldCell | null,
    currentCell: FieldCell,
    nextCell: FieldCell | null
  ) => string;
};
