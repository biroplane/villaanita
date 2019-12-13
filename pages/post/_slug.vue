<template>
  <page
    :isFluid="false"
    class="page-single border-gray"
  >
    <v-card v-if="thePost">
      <v-card-title class="display-3">
        {{ thePost.title.rendered }}
      </v-card-title>
      <v-img
        v-if="thePost.attachment_url_images"
        :src="thePost.attachment_url_images"
      />
      <v-card-text v-html="thePost.content.rendered" />
    </v-card>
  </page>
</template>

<script>
import Page from '@/components/Page'
export default {
  layout: 'default',
  components: {
    Page
  },
  data () {
    return {
      thePost: null
    }
  },
  async beforeCreate () {
    try {
      const po = await this.$axios.get(`${process.env.api_root}/posts?slug=${this.$route.params.slug}`)
      this.thePost = po.data[0]
    } catch (error) {

    }

    // console.log('ECCO IL POST ', po.data)
  }
}
</script>

<style>
</style>
