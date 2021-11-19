<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
@import "./css/app.scss";
@import "./css/quasar.variables.scss";
@font-face {
  font-family: "RobotoCondensed";
  src: url("../public/fonts/RobotoCondensed-Regular.ttf") format("truetype");
  //_ src: url('./assets/fonts/RobotoCondensed-Regular.ttf') format('truetype');
}
</style>
