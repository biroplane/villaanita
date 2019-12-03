<template>
  <div class="parallax">
    Sfondo
    <div class="wrapper">
      <img
        :src="require('@/assets/img/ricerca_bg.png')"
        class="background__image"
      >
      <img
        :src="require('@/assets/img/ricerca_crop_fr.png')"
        class="middle__image"
      >
    </div>
  </div>
</template>

<script>

document.addEventListener('scroll', (e) => {

})
export default {}
</script>

<style lang="scss" scoped>
/* layout */
.parallax {
  position: relative;
  display: flex;
  width: 100vw !important;
  height: 100%;
  margin: 0px;
  padding: 0px !important;

  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
