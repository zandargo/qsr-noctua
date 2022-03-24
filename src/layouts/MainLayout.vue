<template>
  <q-layout view="hHh lpR fFf">
    <div class="fixed-bottom bg-grey-6 flex flex-center container-logo">
      <img
        alt="Noctua Logo"
        src="~assets/img/Noctua001-SymbolWhite.svg"
        class="logo-back"
      >
    </div>

    <q-header
      class="text-white q-electron-drag no-scroll fixed-top q-py-none"
      >
      <q-toolbar class="row">
        <div class="col-1">
          <q-btn dense flat round size="16px" icon="menu" @click="toggleLeftDrawer" />
        </div>

        <q-toolbar-title class="col-grow text-center">
          <q-img
            src="~assets/img/Noctua001-LabelWhite.svg"
            fit="scale-down"
            height="28px"
            class="flex flex-center"
          />
        </q-toolbar-title>

        <div class="col-1">
          <!-- <q-btn dense flat round icon="calendar_today" @click="toggleRightDrawer" /> -->
        </div>
      </q-toolbar>

      <q-tabs
        dense
        align="left"
        breakpoint="600"
        class="bg-indigo-8 text-bluegrey-2"
        >
        <q-route-tab to="/page1" icon="event" class="item-center"/>
        <q-route-tab to="/page3" icon="change_circle"/>
        <q-route-tab to="/page2" icon="list_alt" />
      </q-tabs>

    </q-header>

    <q-drawer
      elevated
      v-model="leftDrawerOpen"
      side="left"
      overlay
      class="bg-grey-4"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container tranparent class="q-ma-md">
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
.logo-back {
    min-height: 120px;
    max-width: 85%;
    max-height: 75%;
    opacity: 90%
  }
  .container-logo {
    height: calc(100vh - 80px);
    width: 100vw;
    z-index: -99;
  }
</style>
