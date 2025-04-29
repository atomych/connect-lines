import { defineComponent, PropType } from "vue";
import type { FieldCell } from "@/game/field/types";
import { FieldCellState } from "@/game/field/types";

export default defineComponent({
  name: "GameFieldCell",
  props: {
    cell: {
      required: true,
      type: Object as PropType<FieldCell>,
    },
    size: {
      required: true,
      type: Number,
    },
  },
  setup: () => {
    return {
      FieldCellState,
    };
  },
});
