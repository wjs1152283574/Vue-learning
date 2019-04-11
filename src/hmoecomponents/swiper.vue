<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" :class="{'full':isFull}" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbolist", "isFull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
  }
}
img {
  height: 100%;
}

.full {
  width: 100%;
}
</style>
