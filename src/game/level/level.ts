import type { Level } from "@/game/level/types";
import { FIELD } from "@/game/field/field";
import { CELL } from "@/game/cell/cell";

export const LEVEL: Level = {
  loadLevelFromConfig: (config) => {
    FIELD.setSize(config.fieldSize);
    FIELD.setField();
    config.points.forEach((point) => {
      FIELD.setCell({ x: point.posX, y: point.posY }, CELL.POINT[point.color]);
    });
  },
};
