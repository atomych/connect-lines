import type { FieldCell } from "@/game/field/types";
import { LineColorType } from "@/game/line/types";

export type Touch = {
  state: {
    touch: {
      isActive: boolean;
      color: LineColorType | null;
      position: {
        x: number | null;
        y: number | null;
      };
    };
    lineCells: FieldCell[];
  };
  onTouchStart: (event: any) => void;
  changePointerPosition: (event: any) => void;
  onTouchEnd: (event: any) => void;
  onTouchStartOnCell: (event: any, cell: FieldCell) => void;
  onTouchEndOnCell: (event: any, cell: FieldCell) => void;
  onTouchMoveOnCell: (event: any, cell: FieldCell) => void;
};
