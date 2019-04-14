<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max style="height:25px;">
      <!-- "-"按钮，点击可减小当前数值 -->
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input
        @change="getVlue"
        class="mui-numbox-input"
        type="number"
        :value="count"
        ref="numbers"
        readonly
      >
      <!-- "+"按钮，点击可增大当前数值 -->
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../lib/Mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  props: ["count", "goodsid"],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getVlue() {
      //   this.$emit("getCount", parseInt(this.$refs.numbers.value));
      console.log(this.$refs.numbers.value);
      //每当数量值改变立即把最新的数量更新到store中
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbers.value
      });
    }
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
