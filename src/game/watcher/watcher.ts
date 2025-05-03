import { computed } from "vue";
import { LINE } from "@/game/line/line";
import { Watcher } from "@/game/watcher/types";

export const WATCHER: Watcher = {
  currentLines: computed(() => {
    return LINE.state.lines;
  }),
  completedLines: computed(() => {
    return LINE.state.lines.filter((line) => line.completed);
  }),
};
