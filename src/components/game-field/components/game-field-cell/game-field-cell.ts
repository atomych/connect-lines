import { computed, defineComponent, PropType } from "vue";
import type { FieldCell } from "@/game/field/types";
import { FieldCellState } from "@/game/field/types";
import useCases from "@/use-cases";

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
  setup: (props) => {
    const cellColor = computed(() => {
      return props.cell.state.type === FieldCellState.Line &&
        props.cell.state.color
        ? useCases.dictionaries.colorType[props.cell.state.color].color
        : "";
    });

    return {
      FieldCellState,
      cellColor,
    };
  },
});
