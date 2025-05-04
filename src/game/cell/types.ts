import type { FieldCellState } from "@/game/field/types";
import type { LineColorType } from "@/game/line/types";
import type { FieldCell } from "@/game/field/types";

export type Cell = {
  POINT: {
    RED: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    BLUE: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    GREEN: {
      type: FieldCellState;
      color: LineColorType;
      body: string | null;
    };
    YELLOW: {
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
