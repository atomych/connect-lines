import { defineComponent } from "vue";

export default defineComponent({
  name: "ControlTouch",
  props: {
    positionX: {
      required: true,
      type: Number,
      default: 0,
    },
    positionY: {
      required: true,
      type: Number,
      default: 0,
    },
  },
});
