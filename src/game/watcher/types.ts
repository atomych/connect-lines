import { ComputedRef } from "vue";
import { GameLine } from "@/game/line/types";

export type Watcher = {
  currentLines: ComputedRef<GameLine[]>;
  completedLines: ComputedRef<GameLine[]>;
};
