<template>
  <div id="firebaseui-auth-container"></div>
  <div id="loader" class="absolute-center">Loading...</div>
</template>

<script setup>

import { onMounted } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebaseui/dist/firebaseui.css'
import { ui } from 'boot/firebase'

onMounted(() => {
  // const ui = new firebaseui.auth.AuthUI(firebase.auth())
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
        return true
      },
      uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
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
    // Other config options...
  })
})

</script>

<style lang="scss" scoped>

</style>
