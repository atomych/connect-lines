<template>
  <div
    class="control-touch"
    v-if="positionX && positionY"
    :style="{
      top: positionY - 25 + 'px',
      left: positionX - 25 + 'px',
    }"
  ></div>
</template>

<style src="./control-touch.css"></style>
<script src="./control-touch.ts"></script>
