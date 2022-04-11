<template>
  <div id="firebaseui-auth-container"></div>
  <div id="loader" class="absolute-center">Loading...</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebaseui/dist/firebaseui.css'
import { ui } from 'boot/firebase'

const router = useRouter()
const store = useStore()

onMounted(() => {
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        store.commit('user/mutLoggedStatus', true)
        const User = firebase.auth().currentUser
        store.commit('user/mutUserInfo', User)
        return router.push('page1')
      },
      uiShown: function () {
      // The widget is rendered. Hide the loader.
        document.getElementById('loader').style.display = 'none'
      }
    },
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      //_ firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //_ firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //_ firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
  })
})

</script>

<style lang="scss" scoped>

</style>
