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
  getDisplayClasses: (prev, current, next) => {
    let classes = "";

    if (!prev && next) {
      classes += "g-l-h ";
      if (current.posY == next?.posY)
        classes += current.posX > next.posX ? "l " : "r ";
      else classes += current.posY > next.posY ? "t " : "b ";
    }

    if (!next && prev) {
      classes += "g-l-h ";
      if (current.posY == prev?.posY)
        classes += current.posX > prev.posX ? "l " : "r ";
      else classes += current.posY > prev.posY ? "t " : "b ";
    }

    if (prev && next) {
      classes += "g-l-f ";
      if (prev.posY == next.posY) classes += "h-l";
      if (prev.posX == next.posX) classes += "v-l";
      if (prev.posY < next.posY && prev.posX < next.posX) classes += "c-t-r";
      if (prev.posY > next.posY && prev.posX > next.posX) classes += "c-b-l";
      if (prev.posY < next.posY && prev.posX > next.posX) classes += "c-b-r";
      if (prev.posY > next.posY && prev.posX < next.posX) classes += "c-t-l";
    }

    return classes;
  },
};
