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
    return {
      GAME,
    };
  },
});
</script>
