<template>
  <span id="map">Google Maps</span>
</template>

<script>
import GM from '@/plugins/googlemaps'
import style from '@/plugins/googlemaps_style'
export default {
  data () {
    return {
      map: null,
      marker: { lat: 41.127492, lng: 16.530003 },
      locations: [
        {
          position: {
            lat: 48.16091,
            lng: 16.38333
          }
        },
        {
          position: {
            lat: 48.17427,
            lng: 16.32962
          }
        }
      ]
    }
  },
  async mounted () {
    // if (process.env.VUE_APP_GEOCODE) {
    //   let geo = process.env.VUE_APP_GEOCODE.split(",");
    //   this.marker.lat = geo[0];
    //   this.marker.lng = geo[1];
    // }
    try {
      const google = await GM()
      // const geocoder = new google.maps.Geocoder();

      this.map = new google.maps.Map(this.$el, {
        zoom: 17,
        center: this.marker,
        styles: style,
        disableDefaultUI: true,
        zoomControl: false,
        scaleControl: false,
        gestureHandling: 'none'
      })
      this.marker = new google.maps.Marker({
        position: this.marker,
        map: this.map,
        icon: require('@/assets/marker.png')
      })
      this.marker.addListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('CLICK, Show Infowindow')
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERRORE ', error)
    }
  }
}
</script>

<style lang="scss">
#map {
  width: 100vw;
  height: 100vh;
  //pointer-events: none;
}
</style>
