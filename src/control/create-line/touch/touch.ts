import { reactive } from "vue";
import { Touch } from "./types";
import { FieldCellState } from "@/game/field/types";
import game from "@/game";

const LINE = game.LINE;

export const TOUCH: Touch = {
  state: reactive({
    touch: {
      isActive: false,
      color: null,
      position: {
        x: null,
        y: null,
      },
    },
    lineCells: [],
  }),

  onTouchStart: (event) => {
    if (!TOUCH.state.lineCells.length) event.preventDefault();
    else {
      TOUCH.state.touch.isActive = true;
    }
  },

  changePointerPosition: (event) => {
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
    TOUCH.state.lineCells = [];
  },

  onTouchStartOnCell: (event, cell) => {
    if (cell.state.type === FieldCellState.Point && cell.state.color) {
      TOUCH.state.touch.color = cell.state.color;
      TOUCH.state.lineCells.push(cell);
      LINE.updateLine(TOUCH.state.lineCells);
    } else if (cell.state.type === FieldCellState.Line && cell.state.color) {
      TOUCH.state.touch.color = cell.state.color;
      TOUCH.state.lineCells = LINE.getCellsBefore(cell);
      LINE.updateLine(TOUCH.state.lineCells);
    }
  },

  onTouchEndOnCell: (event, cell) => {
    LINE.updateLine(TOUCH.state.lineCells);
    TOUCH.state.lineCells = [];
    TOUCH.state.touch.position.x = null;
    TOUCH.state.touch.position.y = null;
  },

  onTouchMoveOnCell: (event, cell) => {
    TOUCH.changePointerPosition(event);
    if (TOUCH.state.touch.isActive) {
      if (cell.state.type === FieldCellState.Empty) {
        TOUCH.state.lineCells.push(cell);
        LINE.updateLine(TOUCH.state.lineCells);
      } else if (
        cell.state.type === FieldCellState.Point &&
        cell.state.color === TOUCH.state.lineCells[0].state.color &&
        TOUCH.state.lineCells.length > 1 &&
        cell !== TOUCH.state.lineCells[0]
      ) {
        TOUCH.state.lineCells.push(cell);
        LINE.updateLine(TOUCH.state.lineCells);
        TOUCH.state.touch.isActive = false;
        TOUCH.state.touch.position.x = null;
        TOUCH.state.touch.position.y = null;
        TOUCH.state.lineCells = [];
      }
    }
  },
};
