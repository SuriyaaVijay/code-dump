<template>
  <ul class="social">
    <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.link" target="_blank" rel="noreferrer"
        ><img class="svg" :src="social.src" alt="social"
      /></a>
    </li>
  </ul>
  <!-- End. social -->
</template>

<script>
  export default {
    data() {
      return {
        socialList: [
          {
            link: "https://www.facebook.com/",
            src: require("../assets/img/svg/social/facebook.svg"),
          },
          {
            link: "https://www.instagram.com/",
            src: require("../assets/img/svg/social/instagram.svg"),
          },
          {
            link: "https://twitter.com/",
            src: require("../assets/img/svg/social/twitter.svg"),
          },
          {
            link: "https://dribbble.com/",
            src: require("../assets/img/svg/social/dribbble.svg"),
          },
          {
            link: "https://www.tiktok.com/",
            src: require("../assets/img/svg/social/tik-tok.svg"),
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
