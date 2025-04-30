<template>
  <div
    class="game-field"
    ref="container"
    @mousedown="TOUCH.onTouchStart($event)"
    @mousemove="TOUCH.onTouchMove($event)"
    @mouseup="TOUCH.onTouchEnd($event)"
  >
    <ControlTouch
      :position-y="Number(TOUCH.state.touch.position.y)"
      :position-x="Number(TOUCH.state.touch.position.x)"
    />
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
        @mouseup="TOUCH.onTouchEndOnCell($event, cell)"
        @mousemove.stop="TOUCH.onTouchMoveOnCell($event, cell)"
        @mousedown="TOUCH.onTouchStartOnCell($event, cell)"
      />
    </div>
  </div>
</template>

<style src="./game-field.css"></style>
<script src="./game-field.ts"></script>
