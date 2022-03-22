<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white q-electron-drag no-scroll shadow-3 absolute-top " height-hint="98">
      <q-toolbar class="row">
        <div class="col-1">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        </div>

        <q-toolbar-title class="col-grow text-center">
          <q-img
            src="~assets/img/Noctua001-LabelWhite.svg"
            fit="scale-down"
            height="32px"
            img-class="logo-blur"
          />
        </q-toolbar-title>

        <div class="col-1">
          <!-- <q-btn dense flat round icon="calendar_today" @click="toggleRightDrawer" /> -->
        </div>

      </q-toolbar>

      <q-tabs align="left" class="bg-grey-12 text-primary text-weight-bold">
        <q-route-tab to="/page1" label="Calendário" class=""/>
        <q-route-tab to="/page3" label="Ciclo" />
        <q-route-tab to="/page2" label="Registros" />
      </q-tabs>
    </q-header>

    <q-drawer
      elevated
      v-model="
      leftDrawerOpen"
      side="left"
      overlay
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <!-- <q-drawer elevated show-if-above v-model="rightDrawerOpen" side="right" bordered>
    </q-drawer> -->

    <q-page-container class="bg-grey-10">
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Footer...</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
