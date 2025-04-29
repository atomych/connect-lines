<template>
  <div
    class="game-field-cell"
    :style="{ width: size + 'px', height: size + 'px' }"
    @click="console.log(cell)"
  >
    <div class="game-field-cell-content"></div>
  </div>
</template>

<script src="./game-field-cell.ts"></script>
<style src="./game-field-cell.css"></style>
