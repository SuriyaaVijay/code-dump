<template>
  <div class="dark">
    <HomeLight />
  </div>
</template>

<script>
  import HomeLight from "./HomeLight";
  export default {
    components: {
      HomeLight,
    },
    mounted() {
      document.body.classList.add("dark");
    },
    destroyed() {
      document.body.classList.remove("dark");
    },
  };
</script>

<style lang="scss" scoped></style>
