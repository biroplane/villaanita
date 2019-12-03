<template>
  <section>
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
        <v-card
          class="tranparent"
          flat
        >
          <v-card-title>
            <v-img
              :src="require('@/assets/img/BZ9A9450.jpg')"
              :aspect-ratio="23/9"
              fill
            >
              <div class="text-center pa-12">
                <h1 class="primary--text">
                  {{ pages[0].title.rendered }}
                </h1>
                <span
                  v-html="stripTag(pages[0].excerpt.rendered)"
                  class="subheading"
                >
                  &nbsp;
                </span>
              </div>
            </v-img>
          </v-card-title>
        </v-card>
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
            <!-- <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
            </v-flex>-->
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import mix from '~/mixins/mixins'
export default {
  mixins: [mix],
  props: { 'pages': { type: Array, default () { return [] } } }

}
</script>

<style>
</style>
