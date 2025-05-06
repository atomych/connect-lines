import { defineComponent } from "vue";
import game from "@/game";

export default defineComponent({
  name: "GameWatcher",
  setup: () => {
    const WATCHER = game.WATCHER;

    return {
      WATCHER,
    };
  },
});
