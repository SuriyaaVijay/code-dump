<template>
  <div class="tokyo_tm_intro">
    <div class="tokyo_tm_intro_fixed_price">
      <span class="anim"></span><span class="anim"></span
      ><span class="anim"></span
      ><a
        href="https://themeforest.net/item/tokyo-vuejs-personal-portfolio-template/32797372"
        target="_blank"
        class="pricing-info anim"
        >Buy Now</a
      >
    </div>
    <!-- End .tokyo_tm_intro_fixed_price -->

    <div class="short_info">
      <router-link to="/">
        <img src="../assets/img/logo/dark.png" alt="brand" />
      </router-link>

      <h3>VueJS Personal Portfolio Template</h3>
    </div>
    <!-- End .short_info -->

    <span class="intro_line"></span><span class="intro_line_2"></span
    ><span class="intro_line_3"></span>

    <div class="demos">
      <div class="left">
        <router-link to="/home-light" target="_blank">
          <div class="desc">
            <img src="../assets/img/intro/light.png" alt="light version demo" />
            <h3 class="title">Light Demo</h3>
          </div>
        </router-link>
      </div>
      <!-- End .left -->
      <div class="right">
        <router-link to="/home-dark" target="_blank"
          ><div class="desc">
            <img src="../assets/img/intro/dark.png" alt="dark version demo" />
            <h3 class="title">Dark Demo</h3>
          </div></router-link
        >
      </div>
      <!-- End .right -->
    </div>
    <!-- End .demos -->
  </div>
  <!-- End .tokyo_tm_intro -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
