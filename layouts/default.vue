<template>
  <v-app app>
    <cookie />
    <the-header />
    <nuxt />

    <the-footer />
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters } from 'vuex'
import Cookie from '@/components/Cookie'
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'

export default {
  name: 'App',
  components: { TheHeader, TheFooter, Cookie },
  data: () => ({
    //
    isHydratated: false,
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],

    mainTitle: process.env.NUXT_ENV_TITLE,
    postsearch: '',

    activeSection: 0
  }),

  computed: {
    ...mapGetters({
      wp_menu: 'staticpages/wp_menu',
      isLoading: 'staticpages/isLoading',
      home_menu: 'staticpages/home_menu'
    }),
    breakpoint () {
      return this.isHydratated ? this.$vuetify.breakpoint : ''
    }
  },
  mounted () {
    this.$store.dispatch('staticpages/doneLoading', true)
    this.isHydratated = true
  },

  methods: {}
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
