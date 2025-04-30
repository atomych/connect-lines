import { FieldCellState } from "@/game/field/types";
import { LineColorType } from "@/game/line/types";

export const CELL = {
  POINT: {
    RED: {
      type: FieldCellState.Point,
      color: LineColorType.Red,
      body: null,
    },
  },
};
