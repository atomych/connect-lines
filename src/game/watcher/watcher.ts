import { computed } from "vue";
import { LINE } from "@/game/line/line";
import { Watcher } from "@/game/watcher/types";
import { FIELD } from "@/game/field/field";
import { FieldCell, FieldCellState } from "@/game/field/types";

export const WATCHER: Watcher = {
  fieldFullness: computed(() => {
    const cells: FieldCell[] = FIELD.state.lines.reduce(
      (acc: FieldCell[], line) => {
        acc.push(...line.cells);
        return acc;
      },
      []
    );
    const filledCells = cells.filter(
      (cell) => cell.state.type === FieldCellState.Line
    ).length;
    const pointsCells = cells.filter(
      (cell) => cell.state.type === FieldCellState.Point
    ).length;
    return +Math.round((filledCells / (cells.length - pointsCells)) * 100);
  }),
};
