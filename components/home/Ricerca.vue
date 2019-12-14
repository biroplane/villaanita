<template>
  <page
    id="ricerca"
    class="page-single border-purple"
  >
    <a name="ricerca-e-sviluppo" />
    <div class="dna">
      <img
        :src="require('@/assets/img/ricerca_crop_fr.png')"
        class="first"
      >
      <img
        :src="require('@/assets/img/ricerca_crop_fr.png')"
        class="second"
      >
    </div>
    <v-container
      column
      class="py-12 rstext"
    >
      <v-col
        xs12
        md12
        lg12
      >
        <h1
          v-if="$vuetify.breakpoint.smAndUp"
          class="display-4 text-uppercase white--text font-weight-black"
        >
          Ricerca e
          <br>Sviluppo
        </h1>

        <h1
          v-else
          class="display-2 text-uppercase white--text font-weight-black"
        >
          Ricerca e
          <br>Sviluppo
        </h1>
      </v-col>

      <v-flex
        md12
        lg6
        xl4
      >
        <v-col>
          <p
            v-html="excerpt"
            class="white--text"
          />
        </v-col>
      </v-flex>

      <v-col>
        <v-btn
          :color="colors.purple"
          dark
          large
        >
          Scopri di più >
        </v-btn>
      </v-col>
    </v-container>
  </page>
</template>

<script>
import Page from '../Page'
import variables from '@/assets/scss/variables.scss'
export default {
  components: { Page },
  props: {
    research: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      colors: variables
    }
  },
  computed: {
    excerpt () {
      return this.research.excerpt ? this.research.excerpt.rendered : ''
      // return (this.research != null && this.research.excerpt != null && this.research.excerpt.rendered != null) ? this.research.excerpt.rendered : ''
    }
  }
}
</script>

<style lang="scss">
#ricerca {
  background-image: url("~@/assets/img/ricerca_bg.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow: hidden;
  .parallax {
    border: 1px solid lime;
    top: 0px !important;
    height: 100vh !important;
    width: 100vw;
  }
  .dna {
    width: 100% !important;
    height: 100vh !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    object-fit: fill !important;
    position: absolute;
    z-index: 1;
    img.first {
      //filter: drop-shadow(20px 20px 10px rgba(black, 0.2));
      //box-shadow: 10px 10px 10px black;
      width: 30vmin !important;
      height: 30vmin !important;
      opacity: 0.65;
      animation: float 6.2s ease-in-out infinite;
      animation-delay: 1.3s;
      -webkit-mask-image: linear-gradient(to right, transparent 5%, black 75%);
      mask-image: linear-gradient(to right, transparent 25%, black 75%);
      //   height: 100% !important;
    }
    img.second {
      filter: drop-shadow(20px 20px 10px rgba(black, 0.2));
      //box-shadow: 10px 10px 10px black;
      position: relative !important;
      width: 50vmin !important;
      height: 50vmin !important;
      left: -15vmin;
      -webkit-mask-image: linear-gradient(to right, transparent 25%, black 75%);
      mask-image: linear-gradient(to right, transparent 25%, black 75%);
      animation: float 6s ease-in-out infinite;
    }
  }
  .rstext {
    z-index: 3 !important;
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(50px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: rotateX(15deg) rotateZ(5deg) translatey(-50px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(50px);
  }
}
</style>
