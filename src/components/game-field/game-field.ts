import { defineComponent, PropType } from "vue";
import type { Field } from "@/game/field/types";
import GameFieldCell from "@/components/game-field/components/game-field-cell/game-field-cell.vue";

export default defineComponent({
  name: "GameField",
  components: {
    GameFieldCell,
  },
  props: {
    field: {
      required: true,
      type: Object as PropType<Field>,
    },
  },
});
