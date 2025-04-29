<template>
  <div class="game-field">
    <div
      class="game-field-line"
      v-for="(line, idx) in field.state.lines"
      :key="idx"
    >
      <GameFieldCell
        v-for="(cell, idx) in line.cells"
        :key="idx"
        :cell="cell"
        :size="80"
      />
    </div>
  </div>
</template>

<style src="./game-field.css"></style>
<script src="./game-field.ts"></script>
