<template>
  <v-content fill-height>
    <!-- PAGE 1 -->
    <button
      @click="nextStop"
      class="custom_fab"
    >
      <v-icon>mdi-chevron-down</v-icon>
    </button>
    <page
      :isFluid="true"
      class="page-start border-green"
    >
      <a name="villa-anita" />
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

    <villanita
      v-if="home_page.length > 0"
      :pages="home_page"
      :jumbotron="jumbotron[0]"
    />

    <!-- PAGE 3 RICERCA -->
    <ricerca :research="research[0]!=null?research[0]:{}" />

    <news :items="newsitems" />
    <!-- PAGE 4 -->
    <google-maps />
    <!-- PAGE 5 -->
  </v-content>
</template>

<script>
/* eslint-disable no-console */
// import axios from 'axios'
import { mapMutations, mapGetters, mapState } from 'vuex'
import Page from '@/components/Page'
import Ricerca from '@/components/home/Ricerca'
import News from '@/components/home/News'
import GoogleMaps from '@/components/home/GoogleMaps'
import Villanita from '@/components/home/Villanita'
import variables from '@/assets/scss/variables.scss'
const homeArticles = [process.env.HOME_MISSION, process.env.HOME_GARDEN, process.env.HOME_STRUCT]

export default {
  components: {
    Page,
    GoogleMaps,
    Villanita,
    Ricerca,
    News
  },
  data: () => ({
    colors: variables,
    home_page: [],
    jumbotron: [],
    research: [],
    newsitems: []
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
  async asyncData ({ app, params, store }) {
    try {
      const [homepages, jumbotron, research, news, menu] = await Promise.all([
        app.$axios.get(`${process.env.api_root}/posts?include=${homeArticles.join(',')}`),
        app.$axios.get(`${process.env.api_root}/posts?include=${process.env.HOME_JUMBOTRON}`),
        app.$axios.get(`${process.env.api_root}/posts?include=${process.env.RESEARCH}`),
        app.$axios.get(`${process.env.api_root}/posts?categories=${process.env.NEWS_CATEGORY}`),
        app.$axios.get(`${process.env.api_root}/categories`)
      ])

      console.log('MENU CARICATO ', menu)

      // store.commit('staticpages/loadMenu', menu)
      // })
      console.log('ASYNC DATA PERFORMED ', store)
      return {
        home_page: homepages.data,
        jumbotron: jumbotron.data,
        research: research.data,
        newsitems: news.data
      }

      // this.home_page = homepages.data
      // this.jumbotron = jumbotron.data
      // this.research = research.data
      // this.newsitems = news.data
    } catch (error) {
      console.error('ERRORE ', error)
    }
    // try {
    //   const homepage = await this.$axios.get(`${process.env.api_root}/posts?include=${homeArticles.join(',')}`)
    //   this.home_page = homepage.data
    // } catch (error) {
    // }
  },

  methods: {
    ...mapMutations({
      setisLoading: 'staticpages/set_isLoading',
      LOAD_MENU: 'staticpages/LOAD_MENU',
      LOAD_PAGES: 'staticpages/LOAD_PAGES',
      set_error: 'staticpages/set_error'
    }),
    nextStop () {
      console.log('NEXT')
    }
  }
}
</script>

<style lang="scss">
.custom_fab {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  background-color: rgba(white, 0.7);
  bottom: 10px;
  margin: auto 0px;
  left: calc(50vw - 25px);
}
</style>
