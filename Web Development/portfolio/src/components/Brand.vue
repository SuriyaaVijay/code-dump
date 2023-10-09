<template>
  <div>
    <hooper :settings="hooperSettings">
      <slide v-for="(brand, i) in brandList" :key="i">
        <img :src="brand.src" alt="brand" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      brandList: [
        {
          src: require("../assets/img/partners/1.png"),
        },
        {
          src: require("../assets/img/partners/2.png"),
        },
        {
          src: require("../assets/img/partners/3.png"),
        },
        {
          src: require("../assets/img/partners/4.png"),
        },
        {
          src: require("../assets/img/partners/5.png"),
        },
        {
          src: require("../assets/img/partners/6.png"),
        },
        {
          src: require("../assets/img/partners/7.png"),
        },
        {
          src: require("../assets/img/partners/8.png"),
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        transition: 200,
        playSpeed: 1500,
        breakpoints: {
          1200: {
            itemsToShow: 4,
          },
          576: {
            itemsToShow: 3,
          },
          280: {
            itemsToShow: 2,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.hooper {
  height: auto;
}
</style>
