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
      <v-list>
        <v-list-item
          v-for="(item, i) in home_menu"
          :key="i"
          :to="item.url"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-if="breakpoint.smAndDown"
      app
      fixed
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in home_menu"
          :key="i"
          :to="item.url"
          text
        >
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view />

    <v-footer height="500">
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-card
              flat
              class="transparent"
            >
              <v-card-title />
              <v-card-text>
                <v-img
                  :src="require('@/assets/logo.png')"
                  width="100"
                />
                <p class="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  veniam?
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  icon
                  color="primary"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  icon
                  color="primary"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  icon
                  color="primary"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  text
                  color="primary"
                >
                  <v-icon>mdi-telephone</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="8">
            <v-container fluid>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    dense
                    label="Nome"
                    outlined
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    dense
                    label="Mail"
                    validate-on-blur=""
                    outlined
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    dense
                    name="input-7-4"
                    label="Outlined textarea"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  />
                </v-col>
                <v-col
                  cols="2"
                  offset="10"
                >
                  <v-btn
                    outlined
                    block
                  >
                    Invia.
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters } from 'vuex'

import Cookie from '@/components/Cookie'
export default {
  name: 'App',
  components: { Cookie },
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
#ricerca {
  background-image: url("~@/assets/img/ricerca_bg.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow: hidden;
  .parallax {
    border: 1px solid lime;
    top: 0px !important;
    height: 100vh !important;
    width: 100vw;
  }
  .dna {
    width: 100% !important;
    height: 100vh !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    object-fit: fill !important;
    position: absolute;
    z-index: 1;
    img.first {
      //filter: drop-shadow(20px 20px 10px rgba(black, 0.2));
      //box-shadow: 10px 10px 10px black;
      width: 30vmin !important;
      height: 30vmin !important;
      opacity: 0.65;
      animation: float 6.2s ease-in-out infinite;
      animation-delay: 1.3s;
      -webkit-mask-image: linear-gradient(to right, transparent 5%, black 75%);
      mask-image: linear-gradient(to right, transparent 25%, black 75%);
      //   height: 100% !important;
    }
    img.second {
      filter: drop-shadow(20px 20px 10px rgba(black, 0.2));
      //box-shadow: 10px 10px 10px black;
      width: 60vmin !important;
      height: 60vmin !important;
      -webkit-mask-image: linear-gradient(to right, transparent 25%, black 75%);
      mask-image: linear-gradient(to right, transparent 25%, black 75%);
      animation: float 6s ease-in-out infinite;
    }
  }
  .rstext {
    z-index: 3 !important;
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(50px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: rotateX(15deg) rotateZ(5deg) translatey(-50px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(50px);
  }
}
// .active-section {
//   color: $green;
//   background: white !important;
//   height: 100% !important;
//   border-radius: 0px !important;
// }
</style>
