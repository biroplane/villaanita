<template>
  <v-app-bar
    app
    elevation="0"
  >
    <v-toolbar-items>
      <p
        v-for="(link,l) in menuItems"
        :key="l"
        :to="link.url"
        text
        active-class="active-section"
      >
        {{ link.title }}
      </p>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      menuItems: null
    }
  },
  async beforeCreate () {
    try {
      this.menuItems = await this.axios
        .get(`${process.env.NUXT_ENV_API_ROOT}/menu`)
        .then((res) => {
          return res.data
        })
    } catch (error) { }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 3rem;
  position: fixed;
  background-color: white;
  width: calc(100vw - (3vmin * 2));
  margin: auto auto;
  left: calc((100vw - 3vmin) - (100vw - (3vmin * 2)));
  right: 50%;
  top: 3vmin;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2999;
  //box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
