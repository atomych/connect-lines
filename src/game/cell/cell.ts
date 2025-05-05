import { FieldCellState } from "@/game/field/types";
import { LineColorType } from "@/game/line/types";
import type { Cell } from "@/game/cell/types";

export const CELL: Cell = {
  POINT: {
    red: {
      type: FieldCellState.Point,
      color: LineColorType.Red,
      body: null,
    },
    blue: {
      type: FieldCellState.Point,
      color: LineColorType.Blue,
      body: null,
    },
    green: {
      type: FieldCellState.Point,
      color: LineColorType.Green,
      body: null,
    },
    yellow: {
      type: FieldCellState.Point,
      color: LineColorType.Yellow,
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
      if (
        (prev.posY < current.posY && next.posX > current.posX) ||
        (next.posY < current.posY && prev.posX > current.posX)
      )
        classes += "c-t-r";
      if (
        (prev.posY < current.posY && next.posX < current.posX) ||
        (next.posY < current.posY && prev.posX < current.posX)
      )
        classes += "c-t-l";
      if (
        (prev.posY > current.posY && next.posX > current.posX) ||
        (next.posY > current.posY && prev.posX > current.posX)
      )
        classes += "c-b-r";
      if (
        (prev.posY > current.posY && next.posX < current.posX) ||
        (next.posY > current.posY && prev.posX < current.posX)
      )
        classes += "c-b-l";
    }

    return classes;
  },
};
