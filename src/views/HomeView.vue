<template>
  <div class="home-container">
    <GameWatcher />
    <GameField :field="GAME.FIELD" />
  </div>
</template>

<style>
.home-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import GameField from "@/components/game-field/game-field.vue";
import GameWatcher from "@/components/game-watcher/game-watcher.vue";
import GAME from "@/game";
import { LineColorType } from "@/game/line/types";

export default defineComponent({
  name: "HomeView",
  components: {
    GameField,
    GameWatcher,
  },
  setup() {
    GAME.LEVEL.loadLevelFromConfig({
      fieldSize: 5,
      points: [
        {
          color: LineColorType.Red,
          posX: 0,
          posY: 0,
        },
        {
          color: LineColorType.Red,
          posX: 3,
          posY: 2,
        },
        {
          color: LineColorType.Green,
          posX: 0,
          posY: 3,
        },
        {
          color: LineColorType.Green,
          posX: 1,
          posY: 4,
        },
      ],
    });
    return {
      GAME,
    };
  },
});
</script>
