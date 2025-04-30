import type { FieldCell } from "@/game/field/types";

export type Touch = {
  state: {
    touch: {
      isActive: boolean;
      position: {
        x: number | null;
        y: number | null;
      };
    };
    start: {
      cell: FieldCell | null;
    };
    currentLine: FieldCell[];
    end: {
      cell: FieldCell | null;
    };
  };
  onTouchStart: (event: any) => void;
  onTouchMove: (event: any) => void;
  onTouchEnd: (event: any) => void;
  onTouchStartOnCell: (event: any, cell: FieldCell) => void;
  onTouchEndOnCell: (event: any, cell: FieldCell) => void;
  onTouchMoveOnCell: (event: any, cell: FieldCell) => void;
};
