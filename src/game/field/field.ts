import { reactive } from "vue";
import { Field, FieldCellState, FieldLine } from "@/game/field/types";

export const FIELD: Field = {
  state: reactive({
    lines: [],
    size: null,
  }),
  setSize: (size) => {
    FIELD.state.size = size;
  },
  setField: () => {
    if (FIELD.state.size) {
      for (let row = 0; row < FIELD.state.size; row++) {
        const line: FieldLine = {
          cells: [],
        };
        for (let col = 0; col < FIELD.state.size; col++) {
          line.cells.push(
            reactive({
              posX: col,
              posY: row,
              state: reactive({
                type: FieldCellState.Empty,
                body: null,
              }),
            })
          );
        }
        FIELD.state.lines.push(line);
      }
    } else {
      throw new Error("FIELD.state.size == null");
    }
  },
  setCell: (cell, body) => {
    cell.state.body = body;
  },
};
