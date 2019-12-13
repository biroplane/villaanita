<template>
  <page
    :isFluid="true"
    class="page-single border-grey"
  >
    <v-row>
      <h1>News &amp; Eventi</h1>
    </v-row>
    <v-row>
      <v-col
        v-for="(item,i) in items"
        :key="i"
        sm="6"
        xs="2"
        md="3"
      >
        <v-card>
          <v-card-title>{{ item.title.rendered }}</v-card-title>
          <v-card-subtitle class="overline">
            {{ item.date | date }}
          </v-card-subtitle>
          <v-divider />
          <v-card-text v-html="item.excerpt.rendered" />
          <v-card-actions>
            <v-spacer />
            <v-btn
              :to="`/post/${item.slug}`"
              text
            >
              LEGGI >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </page>
</template>

<script>
import moment from 'moment'
import Page from '../Page'
export default {
  components: { Page },
  filters: {
    date: (v) => {
      if (v == null) { return '' }
      if (!moment(v).isValid()) { return v }
      return moment(v).format('LLL')
    }
  },
  props: { items: { type: Array, default: () => [] } }
}
</script>

<style>
</style>
