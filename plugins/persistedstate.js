import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'ta1uchida',
    storage: window.sessionStorage,
  })(store)
}
