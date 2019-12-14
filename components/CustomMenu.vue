<template>
  <nav class="homenavbar">
    <h4>
      <a href="/">
        <img
          :src="require('@/assets/logo.png')"
          height="50px"
        >
      </a>
    </h4>
    <v-spacer />
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
  props: { isSinglePage: { type: Boolean, default: false } },
  computed: {
    ...mapGetters({ home_menu: 'staticpages/home_menu' }),
    menu () {
      if (this.isSinglePage) { return [{ name: 'HOME', link: '/' }, ...this.home_menu] }
      return this.home_menu
    }
  }
}
</script>

<style lang="scss" scoped>
nav.homenavbar {
  width: 100vw;
  background-color: #fff;
  height: 7vmin;
  display: flex;
  align-items: center;
  padding: 0.675rem 4vmin;
  position: fixed;
  z-index: 1999;
}
</style>
