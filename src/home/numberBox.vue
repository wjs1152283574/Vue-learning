<template>
  <div>
    <div class="mui-numbox">
      <!-- "-"按钮，点击可减小当前数值 -->
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number" value="1">
      <!-- "+"按钮，点击可增大当前数值 -->
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../lib/Mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
