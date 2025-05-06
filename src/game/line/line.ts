import { reactive } from "vue";
import type { Line } from "./types";
import { LineColorType } from "./types";
import { FieldCell, FieldCellState } from "@/game/field/types";
import { CELL } from "@/game/cell/cell";

export const LINE: Line = {
  state: reactive({
    lines: [],
  }),
  updateLine: (cells) => {
    if (!cells.length) return;
    LINE.resetLine(cells[0].state.color || LineColorType.Red);
    cells.forEach((cell) => {
      if (cell.state.type === FieldCellState.Empty) {
        cell.state.type = FieldCellState.Line;
        cell.state.color = cells[0].state.color || LineColorType.Red;
      }
    });
    let prev: FieldCell | null = null;
    let next: FieldCell | null = null;
    for (let i = 0; i < cells.length; i++) {
      prev = i - 1 > -1 ? cells[i - 1] : null;
      next = i + 1 < cells.length ? cells[i + 1] : null;
      cells[i].state.displayClasses = CELL.getDisplayClasses(
        prev,
        cells[i],
        next
      );
    }
    LINE.state.lines.push({
      cells: [...cells],
      colorType: cells[0].state.color || LineColorType.Red,
      completed: cells[cells.length - 1].state.type === FieldCellState.Point,
    });
  },
  resetLine: (colorType) => {
    const target = LINE.state.lines.find(
      (line) => line.colorType === colorType
    );
    if (target) {
      target.cells.forEach((cell) => {
        if (cell.state.type == FieldCellState.Line) {
          cell.state.type = FieldCellState.Empty;
          cell.state.color = null;
        }
        cell.state.displayClasses = "";
      });
      LINE.state.lines = LINE.state.lines.filter((line) => line !== target);
    }
  },
};
