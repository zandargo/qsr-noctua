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
        v-if="isLoggedIn"
        dense
        align="left"
        breakpoint="600"
        class="bg-indigo-8 text-bluegrey-2"
        >
        <q-route-tab to="/page1" icon="event"/>
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
      <div class="absolute-top bg-info" style="height: 128px; width: calc(100% + 1px)">
        <div class="absolute-bottom bg-transparent text-white q-pa-md">
          <!-- <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar> -->
          <div class="text-weight-medium">{{ userName }}</div>
          <div class="text-caption">{{ userEmail }}</div>
        </div>
      </div>

      <q-scroll-area
        style="height: calc(100% - 120px); margin-top: 120px"
        class="bg-grey-4"
      >
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
import { ref, computed } from 'vue'
import DrawerSections from 'components/DrawerSections.vue'
import { useStore } from 'vuex'

export default {
  components: {
    DrawerSections
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const store = useStore()
    const isLoggedIn = computed(() => {
      return store.state.user.status.isLoggedIn
    })
    const userInfo = computed(() => {
      return store.state.user.info
    })
    const userName = computed(() => {
      return isLoggedIn.value ? store.state.user.info.name : 'Usuário Anônimo'
    })
    const userEmail = computed(() => {
      return isLoggedIn.value ? store.state.user.info.email : 'usuario@anonimo'
    })

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },

      isLoggedIn,
      userInfo,
      userName,
      userEmail
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-back {
    min-height: 120px;
    max-width: 85%;
    max-height: 95%;
    opacity: 90%
  }
  .container-logo {
    height: calc(100vh - 50px);
    width: 100vw;
    z-index: -99;
  }
</style>
