import { LineColorType } from "@/game/line/types";

export type LineColor = {
  color: string;
  type: LineColorType;
};

export const colorType: Record<LineColorType, LineColor> = {
  [LineColorType.Red]: {
    type: LineColorType.Red,
    color: "red",
  },
  [LineColorType.Blue]: {
    type: LineColorType.Blue,
    color: "blue",
  },
  [LineColorType.Green]: {
    type: LineColorType.Green,
    color: "green",
  },
  [LineColorType.Yellow]: {
    type: LineColorType.Yellow,
    color: "yellow",
  },
};

export default {
  colorType,
};
