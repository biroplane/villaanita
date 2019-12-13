<template>
  <page
    :isFluid="false"
    class="page-end border-green"
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
        md12
        class="my-4"
        grow
        style="width:100%"
      >
        <v-sheet
          color="grey lighten-4"
          dark
          elevation="2"
          min-height="25vh"
          class="pa-4"
        >
          <h1 class="display-3 primary--text font-weight-black py-4">
            {{ jumbotron.title.rendered }}
          </h1>
          <p
            v-html="jumbotron.excerpt.rendered"
            class="body-1 black--text my-4"
          />
          <v-divider class="grey lighten-2 my-4" />
          <v-btn
            color="primary"
            class="my-4"
            text=""
          >
            Leggi >
          </v-btn>
        </v-sheet>
      </v-flex>
      <v-flex xs12>
        <v-container
          fluid
          grid-list-xl
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="(page,p) in pages"
              :key="page.id"
              xs12
              md4
            >
              <v-card
                flat
                class="transparent"
              >
                <v-card-title
                  primary-title
                  class="layout justify-center primary--text"
                >
                  <h3 class="text-center">
                    {{ pages[p].title.rendered }}
                  </h3>
                </v-card-title>
                <v-card-text v-html="stripTag(pages[p].excerpt.rendered)" />
                <v-card-actions>
                  <v-btn
                    outlined
                    text
                    block
                    color="primary"
                  >
                    Leggi >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </page>
</template>

<script>
import Page from '../Page'
import mix from '~/mixins/mixins'
export default {
  components: { Page },
  mixins: [mix],
  props: { 'pages': { type: Array, default: () => [] }, jumbotron: { type: Object, default: () => { } } }

}
</script>

<style lang="scss" scoped>
h1.display-3 {
  font-family: "Steinem" !important;
}
</style>
