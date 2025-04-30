import { FieldCellState } from "@/game/field/types";
import { LineColorType } from "@/game/line/types";
import type { Cell } from "@/game/cell/types";

export const CELL: Cell = {
  POINT: {
    RED: {
      type: FieldCellState.Point,
      color: LineColorType.Red,
      body: null,
    },
  },
  setStateType: (cell, state) => {
    cell.state.type = state;
  },
};
