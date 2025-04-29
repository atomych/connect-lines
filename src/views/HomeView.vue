<template>
  <div class="home-container">
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

  position: fixed;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import GameField from "@/components/game-field/game-field.vue";
import GAME from "@/game";

export default defineComponent({
  name: "HomeView",
  components: {
    GameField,
  },
  setup() {
    GAME.FIELD.setSize(3);
    GAME.FIELD.setField();
    GAME.FIELD.setCell({ x: 1, y: 1 }, GAME.CELL.POINT.RED);
    GAME.FIELD.setCell({ x: 2, y: 2 }, GAME.CELL.POINT.RED);

    return {
      GAME,
    };
  },
});
</script>
