export type Touch = {
  state: {
    touch: {
      isActive: boolean;
      position: {
        x: number | null;
        y: number | null;
      };
    };
  };
  onTouchStart: (event: any) => void;
  onTouchMove: (event: any) => void;
  onTouchEnd: (event: any) => void;
  addListeners: (container: any) => void;
  removeListeners: (container: any) => void;
};
