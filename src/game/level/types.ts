import { LineColorType } from "@/game/line/types";

export type PointData = {
  color: LineColorType;
  posX: number;
  posY: number;
};

export type LevelConfig = {
  points: PointData[];
  fieldSize: number;
};

export type Level = {
  loadLevelFromConfig: (config: LevelConfig) => void;
};
