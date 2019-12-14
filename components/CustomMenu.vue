<template>
  <nav class="homenavbar">
    <h4
      v-for="(item, i) in home_menu"
      :key="i"
      class="pr-4 primary--text"
    >
      <a :href="item.link">{{ item.name }}</a>
    </h4>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ home_menu: 'staticpages/home_menu' })
  }
}
</script>

<style>
</style>
