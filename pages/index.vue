<template>
  <v-content fill-height>
    <!-- PAGE 1 -->
    <page
      :isFluid="true"
      class="page-start border-green"
    >
      <v-layout
        fill-height
        column
        wrap
        class="my-12"
        align-center
      >
        <v-flex
          xs12
          sm4
          class="my-4"
        >
          <div class="text-center">
            <div class="crop">
              <v-img
                :src="require('@/assets/logo.png')"
                max-height="91"
                max-width="88"
              />
            </div>

            <nav
              v-show="$vuetify.breakpoint.mdAndUp"
              class="homenavbar"
            >
              <h4
                v-for="(item, i) in home_menu"
                :key="i"
                class="pr-4 primary--text"
              >
                <a :href="item.link">{{ item.name }}</a>
              </h4>
            </nav>

            <div class="d-flex justify-center mb-6 imageCrop">
              <v-img :src="require('@/assets/img/BZ9A9518.jpg')" />
            </div>
          </div>
        </v-flex>
      </v-layout>
    </page>
    <!-- PAGE 2 STRUTTURA -->

    <page
      :isFluid="false"
      class="page-end border-green"
    >
      <villanita
        v-if="wp_pages.length > 0"
        :pages="villa_anita_pages"
      />
    </page>
    <!-- PAGE 3 RICERCA -->

    <page
      id="ricerca"
      class="page-single border-purple"
    >
      <div class="dna">
        <img
          :src="require('@/assets/img/ricerca_crop_fr.png')"
          class="first"
        >
        <img
          :src="require('@/assets/img/ricerca_crop_fr.png')"
          class="second"
        >
      </div>
      <v-container
        column
        class="py-12 rstext"
      >
        <v-col
          xs12
          md12
          lg12
        >
          <h1 class="display-4 text-uppercase white--text font-weight-black">
            Ricerca e
            <br>Sviluppo
          </h1>
        </v-col>

        <v-flex
          md12
          lg6
          xl4
        >
          <v-col>
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex,
              iure dolorum fugit quaerat, facere impedit alias iusto recusandae
              doloribus laudantium sunt unde consequatur commodi doloremque
              similique adipisci, voluptatem dicta. Aliquid, aut maiores. Earum
              corporis accusamus voluptates voluptate minima quidem! Nam sed rem
              quod id dolore. Porro dolore praesentium recusandae officia
              possimus natus corrupti pariatur, quod labore in ad quaerat? Quam
              praesentium repellendus laudantium ex natus quos officia,
              doloremque eos minus quae eveniet quaerat voluptate ducimus
              repudiandae inventore, repellat labore error quisquam ad quis
              delectus doloribus esse officiis! Molestias, recusandae. Atque,
              maiores quis! Beatae neque rem nostrum officiis voluptatum
              dignissimos quis in eveniet doloribus modi numquam perspiciatis
              distinctio repudiandae, ad repellendus nihil adipisci
              reprehenderit voluptates totam delectus blanditiis ab possimus?
              Explicabo deserunt a animi quia facilis doloremque ut recusandae
              consequuntur minima. Molestiae unde hic est ab ex, a sint eum
              laborum quasi dignissimos assumenda saepe nulla. Iste maxime sit
              impedit!
            </p>
          </v-col>
        </v-flex>

        <v-col>
          <v-btn
            :color="colors.purple"
            dark
            large
          >
            Scopri di più >
          </v-btn>
        </v-col>
      </v-container>
    </page>
    <!-- PAGE 3 -->

    <page
      :isFluid="true"
      :noPadding="true"
    >
      <!-- <google-maps /> -->
    </page>
    <!-- PAGE 4 -->
    <!-- PAGE 5 -->
  </v-content>
</template>

<script>
/* eslint-disable no-console */
// import axios from 'axios'
import { mapMutations, mapGetters, mapState } from 'vuex'
import Page from '@/components/Page'

// import GoogleMaps from '@/components/GoogleMaps'
import Villanita from '@/components/Villanita'
import variables from '@/assets/scss/variables.scss'
export default {
  components: {
    Page,
    // GoogleMaps
    Villanita
  },
  data: () => ({
    colors: variables
  }),
  computed: {
    ...mapGetters({
      isLoading: 'staticpages/isLoading',
      home_menu: 'staticpages/home_menu',
      wp_pages: 'staticpages/pages'
    }),
    ...mapState({ error: 'staticpages/error', env: 'root/env' }),

    villa_anita_pages () {
      if (!this.wp_pages) {
        return []
      }
      return this.wp_pages.slice(0, 3)
    }
  },

  // fetch ({ store }) {
  //   return axios.get(`${process.env.api_root}/pages`).then((res) => {
  //     console.log('FETCH -> ', res)
  //     store.dispatch('staticpages/LOAD_PAGES', res.data)
  //   })
  // },
  // async beforeCreate () {
  //   this.$store.commit('staticpages/set_isLoading', false)

  //   // this.setisLoading(true)
  //   try {
  //     await axios
  //       .all([
  //         axios.get(`${process.env.api_root}/pages`),
  //         axios.get(`${process.env.api_root}/menu`)
  //       ])
  //       .then(
  //         axios.spread((pages, menu) => {
  //           this.LOAD_MENU(menu.data)
  //           this.LOAD_PAGES(pages.data)
  //           // eslint-disable-next-line no-console
  //           console.log('AXIOS ', this.menu)
  //         })
  //       )
  //       .catch((err) => {
  //         // eslint-disable-next-line no-console
  //         console.error('ERRORE CARICAMENTO ', err)
  //         this.$store.commit('staticpages/set_error', err)
  //         throw new Error(err)
  //       })
  //       .finally(() => {
  //         // this.setisLoading(false)
  //         this.$store.commit('staticpages/set_isLoading', false)
  //       })
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log('LOG FROM ERROR ', this.$store.state.root)

  //     // eslint-disable-next-line no-console
  //     console.error('ERRORE ', error)
  //     this.$store.commit('staticpages/set_error', error)
  //   }
  // },

  mounted () { },

  methods: {
    ...mapMutations({
      setisLoading: 'staticpages/set_isLoading',
      LOAD_MENU: 'staticpages/LOAD_MENU',
      LOAD_PAGES: 'staticpages/LOAD_PAGES',
      set_error: 'staticpages/set_error'
    })
  }
}
</script>

<style></style>
