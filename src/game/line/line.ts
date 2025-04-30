import { reactive } from "vue";
import type { Line } from "./types";

export const LINE: Line = {
  state: reactive({
    lines: [],
  }),
  setLine: (cells, color) => {
    // LINE.state.lines.push({
    //   cells: ...cells,
    //   color: color,
    // })
  },
};
