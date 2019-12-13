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

    <villanita
      v-if="wp_pages.length > 0"
      :pages="home_page"
      :jumbotron="jumbotron[0]"
    />

    <!-- PAGE 3 RICERCA -->
    <ricerca :research="research[0]!=null?research[0]:{}" />

    <news :items="newsitems" />
    <!-- PAGE 4 -->
    <!-- <google-maps /> -->
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
// import GoogleMaps from '@/components/GoogleMaps'
import Villanita from '@/components/home/Villanita'
import variables from '@/assets/scss/variables.scss'
const homeArticles = [process.env.HOME_MISSION, process.env.HOME_GARDEN, process.env.HOME_STRUCT]

export default {
  components: {
    Page,
    // GoogleMaps
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
  mounted () { },
  async beforeCreate () {
    try {
      const [homepages, jumbotron, research, news] = await Promise.all([
        this.$axios.get(`${process.env.api_root}/posts?include=${homeArticles.join(',')}`),
        this.$axios.get(`${process.env.api_root}/posts?include=${process.env.HOME_JUMBOTRON}`),
        this.$axios.get(`${process.env.api_root}/posts?include=${process.env.RESEARCH}`),
        this.$axios.get(`${process.env.api_root}/posts?categories=${process.env.NEWS_CATEGORY}`)

      ])

      this.home_page = homepages.data
      this.jumbotron = jumbotron.data
      this.research = research.data
      this.newsitems = news.data

      console.log('NEWS ITEMS ', news, process.env.NEWS_CATEGORY)
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
    })
  }
}
</script>

<style></style>
