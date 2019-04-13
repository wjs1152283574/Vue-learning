<template>
  <div>
    <comments :id="$route.params.id"></comments>
  </div>
</template>

<script>
import comments from "../puplicComponents/arguement.vue";
export default {
  components: {
    comments
  }
};
</script>

<style lang="">
</style>