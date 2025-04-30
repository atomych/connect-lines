import { reactive } from "vue";
import type { Line } from "./types";
import { FieldCellState } from "@/game/field/types";

export const LINE: Line = {
  state: reactive({
    lines: [],
  }),
  setLine: (options) => {
    LINE.state.lines.push({
      cells: [...options.cells],
      colorType: options.colorType,
      completed: options.completed,
    });
  },
  startLine: (colorType) => {
    if (LINE.state.lines.filter((line) => line.colorType === colorType)) {
      LINE.resetLine(colorType);
    }
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
      });
      LINE.state.lines = LINE.state.lines.filter((line) => line !== target);
    }
  },
};
