import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import user from './app-user'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
