<template>
  <v-app app>
    <custom-menu />
    <nuxt />
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import CustomMenu from '@/components/CustomMenu'
export default {
  components: { TheFooter, CustomMenu }
}
</script>

<style lang="scss">
$color-pack: false;
@import "~@/assets/scss/main.scss";
@import "~@/assets/scss/variables.scss";

nav.homenavbar {
  height: 7vmin;
  display: flex;
  align-items: center;
}

.scrollButton {
  position: absolute;
  z-index: 2998;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: calc(100vh + 28px);
}

.white {
  background-color: #fff !important;
}
// $red: #e92207;
// $green: #579976;
// $purple: #c100fe;
// $dark-grey: #616161;
// $page_border: 3vmin;

.imageCrop {
  width: 60vmin;
  height: 60vmin;
}

#custom-fab {
  //border: 1px solid tomato;

  position: fixed !important;
  z-index: 5;
  left: 3.1vmin;
  top: 3vmin;
}
// .active-section {
//   color: $green;
//   background: white !important;
//   height: 100% !important;
//   border-radius: 0px !important;
// }
</style>
