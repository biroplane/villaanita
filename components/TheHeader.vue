<template>
  <span>

    <client-only>
      <v-overlay
        :value="isLoading"
        z-index="3000"
        tag="div"
      >
        <v-progress-circular
          indeterminate=""
          rotate=""
          size="100"
        />
      </v-overlay>
      <cookie />
    </client-only>
    <v-navigation-drawer
      v-model="drawer"
      v-if="breakpoint.smAndDown"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-img
            :src="require('@/assets/logo.png')"
            max-height="91"
            max-width="88"
            class="mt-12"
          />
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in home_menu"
          :key="i"
          :to="item.url"
        >
          <v-list-item-title class="link">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      id="custom-fab"
      v-if="breakpoint.smAndDown"
      @click.stop="drawer = !drawer"
      icon
      fab
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookie from '@/components/Cookie'

export default {
  components: { Cookie },
  data () {
    return {
      isHydratated: false,
      drawer: false

    }
  },
  computed: {
    ...mapGetters({ isLoading: 'staticpages/isLoading', home_menu: 'staticpages/home_menu' }),
    breakpoint () {
      return this.isHydratated ? this.$vuetify.breakpoint : ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('LAYOUT FINDER ', this.$route)
    this.isHydratated = true
  }
}
</script>

<style>
</style>
