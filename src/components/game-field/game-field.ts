import { defineComponent, PropType } from "vue";
import type { Field } from "@/game/field/types";
import GameFieldCell from "@/components/game-field/components/game-field-cell/game-field-cell.vue";
import ControlTouch from "@/components/control-touch/control-touch.vue";
import createLine from "@/control/create-line";

export default defineComponent({
  name: "GameField",
  components: {
    GameFieldCell,
    ControlTouch,
  },
  props: {
    field: {
      required: true,
      type: Object as PropType<Field>,
    },
  },
  setup() {
    const TOUCH = createLine.TOUCH;

    return {
      TOUCH,
    };
  },
});
