<template>
  <div
    class="game-field-cell"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <div
      class="game-field-cell-content"
      :class="{
        'game-field-cell-content_point':
          cell.state.type === FieldCellState.Point,
        'game-field-cell-content_line': cell.state.type === FieldCellState.Line,
      }"
      :style="{ backgroundColor: cell.state.color }"
    ></div>
  </div>
</template>

<script src="./game-field-cell.ts"></script>
<style src="./game-field-cell.css"></style>
