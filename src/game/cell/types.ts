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
  };
  setStateType: (cell: FieldCell, state: FieldCellState) => void;
  getDisplayClasses: (
    prevCell: FieldCell | null,
    currentCell: FieldCell,
    nextCell: FieldCell | null
  ) => string;
};
