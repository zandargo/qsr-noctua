<template>
  <q-layout view="hHh lpR fFf">
    <div class="fixed-bottom bg-grey-6 flex flex-center container-logo">
      <img
        alt="Noctua Logo"
        src="~assets/img/Noctua001-SymbolWhite.svg"
        class="logo-back"
      >
    </div>

    <!-- //* -------------------------------- HEADER -------------------------------- *// -->
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
          <q-btn dense flat round to="/login" icon="login" />
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

    <!-- //* -------------------------------- DRAWER -------------------------------- *// -->
    <q-drawer
      elevated
      v-model="leftDrawerOpen"
      side="left"
      overlay
    >
      <div class="absolute-top bg-info" style="height: 160px; width: calc(100% + 1px)">
        <div class="absolute-bottom bg-transparent text-white q-pa-md">
          <!-- <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar> -->
          <div class="text-weight-medium">Kely Galvão</div>
          <div class="text-caption">@estudakely</div>
        </div>
      </div>

      <q-scroll-area style="height: calc(100% - 160px); margin-top: 160px" class="bg-grey-4">
        <DrawerSections />
      </q-scroll-area>
    </q-drawer>

    <!-- //* ------------------------------- MAIN PAGE ------------------------------ *// -->
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
import DrawerSections from 'components/DrawerSections.vue'

export default {
  components: {
    DrawerSections
  },
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
