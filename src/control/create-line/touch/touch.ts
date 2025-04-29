import { reactive } from "vue";
import { Touch } from "./types";

export const TOUCH: Touch = {
  state: reactive({
    touch: {
      isActive: false,
      position: {
        x: null,
        y: null,
      },
    },
  }),

  onTouchStart: (event) => {
    if (TOUCH.state.touch.isActive) event.preventDefault();
    else {
      TOUCH.state.touch.isActive = true;
    }
  },

  onTouchMove: (event) => {
    TOUCH.state.touch.position.x = event.touches[0].clientX;
    TOUCH.state.touch.position.y = event.touches[0].clientY;
  },

  onTouchEnd: (event) => {
    TOUCH.state.touch.isActive = false;
    TOUCH.state.touch.position.x = null;
    TOUCH.state.touch.position.y = null;
  },

  addListeners: (container: any) => {
    container.addEventListener("touchstart", TOUCH.onTouchStart);
    container.addEventListener("touchmove", TOUCH.onTouchMove);
    container.addEventListener("touchend", TOUCH.onTouchEnd);
  },

  removeListeners: (container: any) => {
    container.removeEventListener("touchstart", TOUCH.onTouchStart);
    container.removeEventListener("touchmove", TOUCH.onTouchMove);
    container.removeEventListener("touchend", TOUCH.onTouchEnd);
  },
};
