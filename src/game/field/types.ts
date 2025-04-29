export enum FieldCellState {
  Empty,
  Point,
  Line,
}

export type FieldCell = {
  posX: number;
  posY: number;
  state: {
    type: FieldCellState;
    body?: string | null;
    color?: string | null;
  };
};

export type FieldLine = {
  cells: FieldCell[];
};

export type Field = {
  state: {
    lines: FieldLine[];
    size?: number | null;
  };
  setSize: (size: number) => void;
  setField: () => void;
  setCell: (cell: FieldCell, body: string) => void;
};
