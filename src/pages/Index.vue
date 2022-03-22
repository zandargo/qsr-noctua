<template>
  <q-page class="flex flex-center">
    <div class="fixed-bottom flex flex-center container-logo">
      <img
        alt="Noctua Logo"
        src="~assets/img/Noctua001-SymbolWhite.svg"
        class="logo-back"
      >
    </div>
    <div></div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style lang="scss" scoped>
  .logo-back {
    min-height: 120px;
    max-width: 85%;
    max-height: 75%;
    opacity: 50%
  }
  .container-logo {
    height: calc(100vh - 98px);
    width: 100vw;
  }
</style>
