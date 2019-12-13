<template>
  <v-app app>
    <client-only>
      <v-overlay
        :value="isLoading"
        z-index="3000"
        tag="div"
      >
        <v-progress-circular
          indeterminate=""
          rotate=""
          size="100"
        />
      </v-overlay>
      <cookie />
    </client-only>
    <v-navigation-drawer
      v-model="drawer"
      v-if="breakpoint.smAndDown"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-img
            :src="require('@/assets/logo.png')"
            max-height="91"
            max-width="88"
            class="mt-12"
          />
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in home_menu"
          :key="i"
          :to="item.url"
        >
          <v-list-item-title class="link">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      id="custom-fab"
      v-if="breakpoint.smAndDown"
      @click.stop="drawer = !drawer"
      icon
      fab
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <nuxt />

    <the-footer />
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters } from 'vuex'
import TheFooter from '@/components/TheFooter'
import Cookie from '@/components/Cookie'
export default {
  name: 'App',
  components: { Cookie, TheFooter },
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
    drawer: false,
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
  async beforeMount () {
    this.$store.dispatch('staticpages/doneLoading', false)

    await Promise.all([
      this.$store.dispatch('staticpages/LOAD_PAGES'),
      this.$store.dispatch('staticpages/LOAD_MENU')
    ]).then(([pages, menu]) => {
      // eslint-disable-next-line no-console
      console.log('OLE! ', pages, menu)

      this.$store.dispatch('staticpages/doneLoading', true)
      this.$store.commit('staticpages/loadMenu', menu)
      this.$store.commit('staticpages/loadPages', pages)
    })
  },
  mounted () {
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
