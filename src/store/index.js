import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import user from './app-user'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user
    },
    // plugins: [createPersistedState()],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
