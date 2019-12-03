<template>
  <div class="page">
    <a :name="link" />
    <v-container
      :fluid="isFluid"
      :class="noPadding==true?'nopadding':'pa-12'"
      fill-height
    >
      <!-- <v-layout> -->

      <slot />

      <!-- </v-layout> -->
    </v-container>
  </div>
</template>

<script>
export default {
  props: { 'isFluid': { type: Boolean }, 'noPadding': { type: Boolean }, 'link': { type: String, default: '' } }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh !important;
}
.nopadding {
  padding: 0px !important;
}
</style>
