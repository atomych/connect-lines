import { reactive } from "vue";
import { Field, FieldCellState, FieldRows } from "@/game/field/types";

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
        const line: FieldRows = {
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
                color: null,
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
  setCell: (coords, options) => {
    if (
      FIELD.state.size &&
      coords.y <= FIELD.state.size &&
      coords.x <= FIELD.state.size
    ) {
      FIELD.state.lines[coords.y].cells[coords.x].state.type =
        options?.type || FieldCellState.Empty;
      FIELD.state.lines[coords.y].cells[coords.x].state.body =
        options?.body || null;
      FIELD.state.lines[coords.y].cells[coords.x].state.color =
        options?.color || null;
    }
  },
};
