import { reactive } from "vue";
import { Touch } from "./types";
import { FieldCellState } from "@/game/field/types";

export const TOUCH: Touch = {
  state: reactive({
    touch: {
      isActive: false,
      position: {
        x: null,
        y: null,
      },
    },
    start: {
      cell: null,
    },
    currentLine: [],
    end: {
      cell: null,
    },
  }),

  onTouchStart: (event) => {
    if (!TOUCH.state.start.cell) event.preventDefault();
    else {
      TOUCH.state.touch.isActive = true;
    }
  },

  onTouchMove: (event) => {
    if (!TOUCH.state.touch.isActive) return;
    if (event.touches) {
      TOUCH.state.touch.position.x = event.touches[0].clientX;
      TOUCH.state.touch.position.y = event.touches[0].clientY;
    } else if (event.clientX && event.clientY) {
      TOUCH.state.touch.position.x = event.clientX;
      TOUCH.state.touch.position.y = event.clientY;
    }
  },

  onTouchEnd: (event) => {
    if (!TOUCH.state.touch.isActive) return;
    TOUCH.state.touch.isActive = false;
    TOUCH.state.touch.position.x = null;
    TOUCH.state.touch.position.y = null;
  },

  onTouchStartOnCell: (event, cell) => {
    if (cell.state.type === FieldCellState.Point) {
      TOUCH.state.start.cell = cell;
    } else {
      TOUCH.state.start.cell = null;
    }
  },

  onTouchEndOnCell: (event, cell) => {
    if (TOUCH.state.end.cell) {
      console.log("Линия соединилась");
      console.log(TOUCH.state.currentLine);
      TOUCH.state.start.cell = null;
      TOUCH.state.currentLine = [];
      TOUCH.state.end.cell = null;
    } else if (TOUCH.state.currentLine.length > 0) {
      console.log("Линия не соединилась");
      console.log(TOUCH.state.currentLine);
      TOUCH.state.start.cell = null;
      TOUCH.state.currentLine = [];
    } else {
      console.log("Линия не была начата");
      TOUCH.state.start.cell = null;
    }
  },

  onTouchMoveOnCell: (event, cell) => {
    if (TOUCH.state.start.cell && TOUCH.state.touch.isActive) {
      console.log(cell);
      console.log(cell.state.type);
      if (cell.state.type === FieldCellState.Empty) {
        cell.state.type = FieldCellState.Line;
        cell.state.color = TOUCH.state.start.cell.state.color;
        TOUCH.state.currentLine.push(cell);
      } else if (
        cell.state.type === FieldCellState.Point &&
        cell.state.color === TOUCH.state.start.cell.state.color &&
        TOUCH.state.currentLine.length > 0
      ) {
        TOUCH.state.end.cell = cell;
        TOUCH.state.touch.isActive = false;
      }
    }
  },
};
