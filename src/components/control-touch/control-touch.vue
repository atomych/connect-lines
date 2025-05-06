<template>
  <div
    class="control-touch"
    v-if="positionX && positionY"
    :style="{
      top: positionY - 50 + 'px',
      left: positionX - 50 + 'px',
      backgroundColor: color,
    }"
  ></div>
</template>

<style src="./control-touch.css"></style>
<script src="./control-touch.ts"></script>
