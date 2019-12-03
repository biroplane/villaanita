<template>
  <div
    v-if="isOpen"
    class="cookie"
  >
    <v-alert
      prominent
      type="info"
      color="primary"
    >
      <v-row align="center">
        <v-col class="grow">
          <slot name="message">
            <h1>
              Questo sito web utilizza i cookie
            </h1>
            <p>
              Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi
            </p>
          </slot>
        </v-col>
        <v-col
          class="shrink d-flex justify-end"
          cols="12"
          md="3"
        >
          <v-btn
            @click="accept"
            class="ma-2"
          >
            {{ buttonTextAccept }}
          </v-btn>
          <v-btn
            @click="deny"
            class="ma-2"
            text
          >
            {{ buttonTextDeny }}
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>

// UA-153833526-1
export default {
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny'
    },
    message: {
      type: String,
      default: 'Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi'

    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition () {
      return `cookie--${this.position}`
    }
  },
  created () {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  &__link {
    color: #ffffff;
    text-decoration: underline;
    transition: all 0.25s;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
